from flask import Flask, request, jsonify
from flask_cors import CORS
from rsa_utils import generate_keys, get_public_key, get_private_key
from encryption.aes_utils import encrypt_data, decrypt_data
from Crypto.Cipher import PKCS1_OAEP

app = Flask(__name__)
CORS(app)  # Allows React (port 3000) to talk to Flask (port 5000)

@app.route('/encrypt', methods=['POST'])
def encrypt():
    # Handle file, text, or both
    file = request.files.get('file', None)
    text = request.form.get('text', None)

    if file:
        data = file.read()
    elif text:
        data = text.encode('utf-8')
    else:
        return jsonify({'error': 'No file or text provided'}), 400

    key, nonce, tag, ciphertext = encrypt_data(data)
    public_key = get_public_key()
    cipher_rsa = PKCS1_OAEP.new(public_key)
    enc_key = cipher_rsa.encrypt(key)
    return jsonify({
        'enc_key': enc_key.hex(),
        'nonce': nonce.hex(),
        'tag': tag.hex(),
        'ciphertext': ciphertext.hex()
    }), 200

@app.route('/decrypt', methods=['POST'])
def decrypt():
    try:
        private_key = get_private_key()
        enc_key = bytes.fromhex(request.json['enc_key'])
        nonce = bytes.fromhex(request.json['nonce'])
        tag = bytes.fromhex(request.json['tag'])
        ciphertext = bytes.fromhex(request.json['ciphertext'])
        cipher_rsa = PKCS1_OAEP.new(private_key)
        key = cipher_rsa.decrypt(enc_key)
        data = decrypt_data(key, nonce, tag, ciphertext)
        try:
            # Attempt to decode as UTF-8 text
            return data.decode('utf-8'), 200
        except:
            # Otherwise, return as hex (binary file or image)
            return jsonify({'file': data.hex()}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(port=5000)
