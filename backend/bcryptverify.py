import sys
import bcrypt

# argv[1] = plain password 
password = sys.argv[1]
# argv[2] = bcrypt hash to verify against
hash_str = sys.argv[2]

password_bytes = password.encode('utf-8')
hash_bytes = hash_str.encode('utf-8')

# Check password
if bcrypt.checkpw(password_bytes, hash_bytes):
    print("valid")
else:
    print("invalid")
