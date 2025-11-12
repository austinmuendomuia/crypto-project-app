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



import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../resources/logo.png';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: url(${logo}) center center/cover no-repeat;
  //background: linear-gradient(120deg,#0062ff 0%,#52e5e7 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 600px 0 0 0px;
`;

const Title = styled.h1`
  color: #262c4b;
  font-size: 2.5rem;
  margin-bottom: 34px;
  font-weight: 700;
`;

const Section = styled.div`
  background: #fff;
  border-radius: 76px;
  box-shadow: 0 10px 44px #cbdaee29;
  padding: 54px 108px;
  max-width: 540px;
`;

const Button = styled.button`
  background: #27d37f;
  color: white;
  font-size: 2.25rem;
  border: none;
  border-radius: 30px;
  padding: 26px 44px;
  font-weight: 800;
  cursor: pointer;
  margin-top: 32px;
`;

const FileItem = styled.li`
  font-size: 2.55rem;
  margin-bottom: 22px;
  color: #353c56;
  background: #f1f2fa;
  border-radius: 14px;
  padding: 14px 20px;
  font-weight: 600;
  border: 1.5px solid #badcff;
  box-shadow: 0 3px 10px #bedcff23;
`;

// export default function DecryptFiles() {
//     const [decrypted, setDecrypted] = useState(null);

//     // Simulate a decrypted result
//     const simulateDecrypt = () => {
//         setDecrypted({
//             name: "SampleDecryptedFile.txt",
//             type: "text/plain",
//             size: 3072,
//             message: "Example decrypted file available for download or viewing."
//         });
//     };

//     return (
//         <PageWrapper>
//             <Title style={{ color: "green" }}>Decrypt Files / Media</Title>
//             <Section>
//                 <h2 style={{ fontSize: "40px" }}>Decrypt your encrypted items here.</h2>
//                 {!decrypted ? (
//                     <Button onClick={simulateDecrypt} style={{ fontSize: "31px" }}>Click to Decrypt Files/Images/Videos</Button>
//                 ) : (
//                     <div style={{ textAlign: "center" }}>
//                         <h2 style={{ fontSize: "40px", margin: "28px 0 8px" }}>Decrypted File</h2>
//                         <div style={{ fontSize: "29px", fontWeight: 600 }}>{decrypted.name}</div>
//                         <div style={{ color: "#357", fontSize: "27px" }}>{decrypted.type} — {Math.round(decrypted.size / 1024)} KB</div>
//                         <div style={{ margin: "18px 0", color: "#94b3c7" }}>{decrypted.message}</div>
//                     </div>
//                 )}
//             </Section>
//         </PageWrapper>
//     );
// }


export default function DecryptFiles({ username }) {
    const [encryptedFiles, setEncryptedFiles] = useState([]);
    const [decrypted, setDecrypted] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/api/encrypted-files/${username}`)
            .then(res => res.json()).then(setEncryptedFiles)
            .catch(() => setEncryptedFiles([]));
    }, [username]);
    const handleDecrypt = async (fileId) => {
        try {
            const res = await fetch('http://localhost:5000/api/decrypt-file', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, fileId })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Decrypt error");
            setDecrypted(data);
        } catch (err) {
            alert("Decryption failed");
        }
    };
    return (
        <PageWrapper>
            <Title style={{ color: "green" }}>Decrypt Files / Media</Title>
            <Section>
                <h2 style={{ fontSize: "40px" }}>Decrypt your encrypted items here.</h2>
                {!decrypted ? (
                    <>
                        {encryptedFiles.map(file => (
                            <div key={file.id} style={{ marginBottom: 24 }}>
                                <FileItem>
                                    <div><b>{file.filename}</b></div>
                                    <div style={{ fontSize: "1.08rem", color: "#7599a9" }}>{file.filetype} — {file.encrypted_at}</div>
                                    <Button onClick={() => handleDecrypt(file.id)} style={{ fontSize: "21px", marginTop: 10 }}>Decrypt This File</Button>
                                </FileItem>
                            </div>
                        ))}
                    </>
                ) : (
                    <div style={{ textAlign: "center" }}>
                        <h2 style={{ fontSize: "40px", margin: "28px 0 8px" }}>Decrypted File</h2>
                        <div style={{ fontSize: "29px", fontWeight: 600 }}>{decrypted.filename}</div>
                        <div style={{ color: "#357", fontSize: "27px" }}>{decrypted.filetype}</div>
                        <div style={{ margin: "18px 0", fontSize: "2.5rem", color: "#df1708ff" }}>{decrypted.content}</div>
                    </div>
                )}
            </Section>
        </PageWrapper>
    );
}