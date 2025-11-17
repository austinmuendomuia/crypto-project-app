import sys
import os
import base64
import hashlib
from cryptography.hazmat.primitives import serialization, hashes, padding as sympad
from cryptography.hazmat.primitives.asymmetric import padding, rsa
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend

def sha256_hash(data):
    return hashlib.sha256(data.encode('utf-8')).hexdigest()

def load_public_key(path):
    with open(path, 'rb') as f:
        return serialization.load_pem_public_key(f.read(), backend=default_backend())

def load_private_key(path):
    with open(path, 'rb') as f:
        return serialization.load_pem_private_key(f.read(), password=None, backend=default_backend())

def hybrid_encrypt(public_key_path, plaintext):
    public_key = load_public_key(public_key_path)
    aes_key = os.urandom(32)  # AES-256 key
    iv = os.urandom(16)

    hash_val = sha256_hash(plaintext)
     

    padder = sympad.PKCS7(128).padder()
    padded_data = padder.update(plaintext.encode('utf-8')) + padder.finalize()

    cipher = Cipher(algorithms.AES(aes_key), modes.CBC(iv), backend=default_backend())
    encryptor = cipher.encryptor()
    ciphertext = encryptor.update(padded_data) + encryptor.finalize()

    encrypted_key = public_key.encrypt(
        aes_key,
        padding.OAEP(mgf=padding.MGF1(algorithm=hashes.SHA256()), algorithm=hashes.SHA256(), label=None)
    )

    print(base64.b64encode(ciphertext).decode('utf-8'))
    print(base64.b64encode(encrypted_key).decode('utf-8'))
    print(base64.b64encode(iv).decode('utf-8'))

   
    print(hash_val)  # SHA-256 hash of the plaintext/base64 content


def hybrid_decrypt(private_key_path, ciphertext_b64, encrypted_key_b64, iv_b64):
    private_key = load_private_key(private_key_path)
    ciphertext = base64.b64decode(ciphertext_b64)
    encrypted_key = base64.b64decode(encrypted_key_b64)
    iv = base64.b64decode(iv_b64)

    aes_key = private_key.decrypt(
        encrypted_key,
        padding.OAEP(mgf=padding.MGF1(algorithm=hashes.SHA256()), algorithm=hashes.SHA256(), label=None)
    )

    cipher = Cipher(algorithms.AES(aes_key), modes.CBC(iv), backend=default_backend())
    decryptor = cipher.decryptor()
    padded_plaintext = decryptor.update(ciphertext) + decryptor.finalize()

    unpadder = sympad.PKCS7(128).unpadder()
    plaintext = unpadder.update(padded_plaintext) + unpadder.finalize()
    print(plaintext.decode('utf-8'))


def hybrid_encrypt_file(public_key_path, file_path):
    public_key = load_public_key(public_key_path)
    aes_key = os.urandom(32)
    iv = os.urandom(16)
    with open(file_path, 'rb') as f:
        data = f.read()
    padder = sympad.PKCS7(128).padder()
    padded_data = padder.update(data) + padder.finalize()
    cipher = Cipher(algorithms.AES(aes_key), modes.CBC(iv), backend=default_backend())
    encryptor = cipher.encryptor()
    ciphertext = encryptor.update(padded_data) + encryptor.finalize()
    encrypted_key = public_key.encrypt(
        aes_key,
        padding.OAEP(mgf=padding.MGF1(algorithm=hashes.SHA256()), algorithm=hashes.SHA256(), label=None)
    )
    with open(file_path + '.enc', 'wb') as f:
        f.write(ciphertext)
    with open(file_path + '.key', 'wb') as f:
        f.write(encrypted_key)
    with open(file_path + '.iv', 'wb') as f:
        f.write(iv)
    print(f'Encrypted file saved: {file_path}.enc\nKey: {file_path}.key\nIV: {file_path}.iv')


def hybrid_decrypt_file(private_key_path, enc_path, key_path, iv_path, output_path):
    private_key = load_private_key(private_key_path)
    with open(enc_path, 'rb') as f:
        ciphertext = f.read()
    with open(key_path, 'rb') as f:
        encrypted_key = f.read()
    with open(iv_path, 'rb') as f:
        iv = f.read()
    aes_key = private_key.decrypt(
        encrypted_key,
        padding.OAEP(mgf=padding.MGF1(algorithm=hashes.SHA256()), algorithm=hashes.SHA256(), label=None)
    )
    cipher = Cipher(algorithms.AES(aes_key), modes.CBC(iv), backend=default_backend())
    decryptor = cipher.decryptor()
    padded_plaintext = decryptor.update(ciphertext) + decryptor.finalize()
    unpadder = sympad.PKCS7(128).unpadder()
    plaintext = unpadder.update(padded_plaintext) + unpadder.finalize()
    with open(output_path, 'wb') as f:
        f.write(plaintext)
    print(f'Decrypted file saved as: {output_path}')


if __name__ == "__main__":
    # Usage explained for quick reference
    # Message:   python hybrid_crypto.py encrypt public.pem "Your message here"
    # Message:   python hybrid_crypto.py decrypt private.pem ciphertext_b64 key_b64 iv_b64
    # File:      python hybrid_crypto.py encrypt_file public.pem filename
    # File:      python hybrid_crypto.py decrypt_file private.pem filename.enc filename.key filename.iv outputfile
    
    mode = sys.argv[1]
    if mode == "encrypt":
        pubkey = sys.argv[2]
        message = sys.argv[3]
        hybrid_encrypt(pubkey, message)

    elif mode == "decrypt":
        privkey = sys.argv[2]
        ciphertext_b64 = sys.argv[3]
        encrypted_key_b64 = sys.argv[4]
        iv_b64 = sys.argv[5]
        hybrid_decrypt(privkey, ciphertext_b64, encrypted_key_b64, iv_b64)

    elif mode == "encrypt_file":
        pubkey = sys.argv[2]
        filepath = sys.argv[3]
        hybrid_encrypt_file(pubkey, filepath)

    elif mode == "decrypt_file":
        privkey = sys.argv[2]
        enc_path = sys.argv[3]
        key_path = sys.argv[4]
        iv_path = sys.argv[5]
        output_path = sys.argv[6]
        hybrid_decrypt_file(privkey, enc_path, key_path, iv_path, output_path)

    else:
        print("Usage error: See code comments for usage.", file=sys.stderr)
        sys.exit(1)
