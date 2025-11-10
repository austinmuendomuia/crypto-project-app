#Handles AES encryption and decryption for files and text.
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes

def encrypt_data(data):
    key = get_random_bytes(32)
    cipher = AES.new(key, AES.MODE_EAX)
    ciphertext, tag = cipher.encrypt_and_digest(data)
    return key, cipher.nonce, tag, ciphertext

def decrypt_data(key, nonce, tag, ciphertext):
    cipher = AES.new(key, AES.MODE_EAX, nonce=nonce)
    return cipher.decrypt_and_verify(ciphertext, tag)
