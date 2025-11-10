// import React from 'react';
// import styled from 'styled-components';

// const PageWrapper = styled.div`
//   min-height: 100vh;
//   background: linear-gradient(120deg,#0062ff 0%,#52e5e7 100%);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 600px 0 0 0px;
// `;

// const Title = styled.h1`
//   color: #262c4b;
//   font-size: 2.5rem;
//   margin-bottom: 34px;
//   font-weight: 700;
// `;

// const Section = styled.div`
//   background: #fff;
//   border-radius: 76px;
//   box-shadow: 0 10px 44px #cbdaee29;
//   padding: 54px 108px;
//   max-width: 540px;
// `;

// const Button = styled.button`
//   background: #27d37f;
//   color: white;
//   font-size: 2.25rem;
//   border: none;
//   border-radius: 30px;
//   padding: 26px 44px;
//   font-weight: 800;
//   cursor: pointer;
//   margin-top: 32px;
// `;

// export default function DecryptFiles() {
//     const handleDecrypt = () => {
//         alert('Starting decryption... (implement your logic here)');
//     };

//     return (
//         <PageWrapper>
//             <Title>Decrypt Files / Media</Title>
//             <Section>
//                 <h2 style={{ fontSize: "40px" }}>Decrypt your encrypted items here.</h2>
//                 <Button onClick={handleDecrypt}>Click to Decrypt Files/Images/Videos</Button>
//             </Section>
//         </PageWrapper>
//     );
// }



import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../resources/logo.png';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: url(${logo}) center center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 0 0; /* less extreme padding */
`;
const Title = styled.h1`
  color: #262c4b;
  font-size: 2.5rem;
  margin-bottom: 34px;
  font-weight: 700;
`;
const Section = styled.div`
  background: #fff;
  border-radius: 32px;
  box-shadow: 0 10px 44px #cbdaee29;
  padding: 44px 54px;
  max-width: 540px;
`;
const Button = styled.button`
  background: #27d37f;
  color: white;
  font-size: 1.25rem;
  border: none;
  border-radius: 18px;
  padding: 12px 28px;
  font-weight: 800;
  cursor: pointer;
  margin-top: 24px;
`;

export default function DecryptFiles() {
  // State for decrypt fields and result
  const [encryptedKey, setEncryptedKey] = useState('');
  const [nonce, setNonce] = useState('');
  const [tag, setTag] = useState('');
  const [ciphertext, setCiphertext] = useState('');
  const [decryptedResult, setDecryptedResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleDecrypt(event) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);
    fetch('http://localhost:5000/decrypt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        enc_key: encryptedKey,
        nonce: nonce,
        tag: tag,
        ciphertext: ciphertext
      })
    })
      .then(response => response.text())
      .then(decrypted => {
        setIsLoading(false);
        setDecryptedResult(decrypted);
      })
      .catch(error => {
        setIsLoading(false);
        setError('Decryption error: ' + error.message);
      });
  }

  return (
    <PageWrapper>
      <Title>Decrypt Files / Media</Title>
      <Section>
        <h2 style={{ fontSize: '32px' }}>Decrypt your encrypted items here.</h2>
        <form onSubmit={handleDecrypt} style={{ marginTop: 28 }}>
          <input
            placeholder="Encrypted Key"
            value={encryptedKey}
            onChange={e => setEncryptedKey(e.target.value)}
            style={{ width: '100%', marginBottom: 8, padding: 8 }}
          />
          <input
            placeholder="Nonce"
            value={nonce}
            onChange={e => setNonce(e.target.value)}
            style={{ width: '100%', marginBottom: 8, padding: 8 }}
          />
          <input
            placeholder="Tag"
            value={tag}
            onChange={e => setTag(e.target.value)}
            style={{ width: '100%', marginBottom: 8, padding: 8 }}
          />
          <input
            placeholder="Ciphertext"
            value={ciphertext}
            onChange={e => setCiphertext(e.target.value)}
            style={{ width: '100%', marginBottom: 8, padding: 8 }}
          />
          <Button type="submit">Decrypt</Button>
        </form>
        {isLoading && <div style={{ marginTop: 16, color: '#666' }}>Decrypting...</div>}
        {error && <div style={{ color: 'red', marginTop: 16 }}>{error}</div>}
      {decryptedResult && (
       <div className="encrypted-result-box">
        <span className="result-label">Decryption Result:</span>
        {decryptedResult}
     </div>
      )}

      </Section>
    </PageWrapper>
  );
}
