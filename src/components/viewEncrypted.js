
import React from 'react';
import styled from 'styled-components';
import logo from '../resources/logo.png';
import { useState, useEffect } from 'react';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: url(${logo}) center center/cover no-repeat;
  //background: linear-gradient(120deg,#33aaff 0%,#62e5e7 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 0 50px;
`;

const Title = styled.h1`
  color: #262c4b;
  font-size: 2.5rem;
  margin-bottom: 34px;
  font-weight: 700;
`;

const Section = styled.div`
  background: #fff;
  border-radius: 36px;
  box-shadow: 0 10px 44px #cbdaee29;
  padding: 54px 48px;
  max-width: 540px;
  min-width: 380px;
`;

const FileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 38px 0;
  font-size: 1.05rem;
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
  max-width: 480px;
  word-break: break-word;
  overflow-wrap:anywhere;
  white-space: normal;
`;

export default function ViewEncrypted1({ username }) {
  const [encryptedFiles, setEncryptedFiles] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/encrypted-files/${username}`)
      .then(res => res.json()).then(setEncryptedFiles)
      .catch(() => setEncryptedFiles([]));
  }, [username]);
  return (
    <PageWrapper>
      <Title style={{ fontWeight: "bold", color: "red" }}>View Encrypted</Title>
      <Section>
        <h2 style={{ fontSize: "30px" }}>All your Encrypted Files:</h2>
        <FileList>
          {encryptedFiles.map(file => (
            <FileItem key={file.id}>
              <div style={{
                fontSize: "2.3rem",
                fontWeight: "bold",
                whiteSpace: "normal",
                overflowWrap: "anywhere",
                wordBreak: "break-word",
                maxWidth: "100%"
              }}>
                {file.filename}
              </div>
              <div style={{ fontSize: "2.18rem", color: "#7599a9" }}>{file.filetype} — encrypted on {file.encrypted_at}</div>
            </FileItem>
          ))}
        </FileList>
      </Section>
    </PageWrapper>
  );
}