#Handles all RSA key generation and management.
from Crypto.PublicKey import RSA

def generate_keys():
    key = RSA.generate(2048)
    with open("private.pem", "wb") as f:
        f.write(key.export_key())
    with open("public.pem", "wb") as f:
        f.write(key.publickey().export_key())

def get_public_key():
    with open("public.pem", "rb") as f:
        return RSA.import_key(f.read())

def get_private_key():
    with open("private.pem", "rb") as f:
        return RSA.import_key(f.read())
    
if __name__ == "__main__":
    generate_keys()
    print("RSA keys generated!")
