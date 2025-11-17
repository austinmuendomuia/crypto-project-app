from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.primitives import serialization

# Generate RSA key pair (2048 bits is secure for demonstration)
private_key = rsa.generate_private_key(
    public_exponent=65537,      # Standard public exponent
    key_size=2048               # Key size; use 2048 or 4096 bits for strong security
)

# Export (serialize) private key to PEM format
pem_private = private_key.private_bytes(
    encoding=serialization.Encoding.PEM,
    format=serialization.PrivateFormat.PKCS8,
    encryption_algorithm=serialization.NoEncryption()  # Use a password here if you want to protect your PEM
)

# Export (serialize) public key to PEM format
pem_public = private_key.public_key().public_bytes(
    encoding=serialization.Encoding.PEM,
    format=serialization.PublicFormat.SubjectPublicKeyInfo
)

# Save the keys to files 
with open("private.pem", "wb") as f:
    f.write(pem_private)

with open("public.pem", "wb") as f:
    f.write(pem_public)

print("RSA key pair generated and saved.")
