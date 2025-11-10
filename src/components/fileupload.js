import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../resources/logo.png';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: url(${logo}) center center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 0 60px;
`;

const Title = styled.h1`
  color: #262c4b;
  font-size: 2.6rem;
  margin-bottom: 48px;
  font-weight: 700;
`;

const Section = styled.div`
  background: #fff;
  border-radius: 56px;
  box-shadow: 0 10px 44px #cbdaee29;
  padding: 54px 68px;
  max-width: 540px;
`;

const Label = styled.label`
  font-size: 1.8rem;
  font-weight: 900;
  color: #353c56;
  margin-bottom: 20px;
  display: block;
`;

const Input = styled.input`
  font-size: 1.8rem;
  padding: 18px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 6.5px solid #ccc;
  width: 100%;
`;

const Button = styled.button`
  background: #0062ff;
  color: white;
  font-size: 1.8rem;
  border: none;
  border-radius: 28px;
  padding: 18px 40px;
  font-weight: 600;
  cursor: pointer;
`;

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [encKey, setEncKey] = useState('');
  const [nonce, setNonce] = useState('');
  const [tag, setTag] = useState('');
  const [ciphertext, setCiphertext] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
      setSelectedFile(file);
      setError('');
    } else {
      setSelectedFile(null);
      setError('Only image or video files are allowed for this input.');
    }
  };

  const handleUpload = e => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Please choose a valid image or video file.');
      return;
    }
    setError('');
    const formData = new FormData();
    formData.append('file', selectedFile);
    fetch('http://localhost:5000/encrypt', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        setEncKey(data.enc_key);
        setNonce(data.nonce);
        setTag(data.tag);
        setCiphertext(data.ciphertext);
        setError('');
      })
      .catch(err => setError('Encryption error: ' + err.message));
  };

  return (
    <PageWrapper>
      <Title style={{ color: "red" }}>Encrypt Images/Videos</Title>
      <Section>
        <form onSubmit={handleUpload}>
          <Label>Choose an image or video:</Label>
          <Input type="file" accept="image/*,video/*" onChange={handleFileChange} />
          <Button type="submit">Encrypt Media</Button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {encKey && (
          <div style={{ marginTop: 24 }}>
            <h3>Encrypted Results</h3>
            <p><strong>Encrypted Key:</strong> {encKey}</p>
            <p><strong>Nonce:</strong> {nonce}</p>
            <p><strong>Tag:</strong> {tag}</p>
            <p><strong>Ciphertext:</strong> {ciphertext}</p>
          </div>
        )}
      </Section>
    </PageWrapper>
  );
}
