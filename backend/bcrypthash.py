# bcrypthash.py
import sys
import bcrypt

# Get the password from command line argument
password = sys.argv[1]
password_bytes = password.encode('utf-8')
salt = bcrypt.gensalt()
hash_bytes = bcrypt.hashpw(password_bytes, salt)
hash_str = hash_bytes.decode('utf-8')

print(hash_str)

