import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../resources/logo.png';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: url(${logo}) center center/cover no-repeat;
  //background: linear-gradient(120deg,#0062ff 0%,#52e5e7 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 500px 0 0 60px;
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
  padding: 54px 98px;
  max-width: 540px;
`;

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 500;
  color: #353c56;
  margin-bottom: 20px;
  display: block;
`;

const Input = styled.input`
  font-size: 1.8rem;
  padding: 18px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 7.5px solid #ccc;
  width: 100%;
`;

const TextArea = styled.textarea`
  font-size: 1.8rem;
  padding: 18px;
  margin-bottom: 20px;
  border-radius: 22px;
  border: 7.5px solid #ccc;
  width: 100%;
  resize: vertical;
`;

const Button = styled.button`
  background: #0062ff;
  color: white;
  font-size: 2.3rem;
  border: none;
  border-radius: 28px;
  padding: 18px 108px;
  font-weight: 800;
  cursor: pointer;
  align-self: center;
  &:hover {
    box-shadow: 0 12px 50px #00031233;
  }
`;

export default function EncryptFiles1() {
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = e => {
        const selected = e.target.files[0];
        // Accept only non-image/video files
        if (selected && !selected.type.startsWith('image/') && !selected.type.startsWith('video/')) {
            setFile(selected);
        } else {
            setFile(null);
            alert('Only non-image/non-video files are allowed for this input.');
        }
    };

    const handleEncrypt = e => {
        e.preventDefault();
        alert('Encrypt request submitted!\nText: ' + text + ', File: ' + (file && file.name));
        // Add real encryption here
    };

    return (
        <PageWrapper>
            <Title style={{ color: "red" }}>Encrypt Text &amp; Files</Title>
            <Section>
                <form onSubmit={handleEncrypt}>
                    <Label style={{ fontWeight: "bold", fontSize: "30px" }}>Input Text to Encrypt:</Label>
                    <TextArea rows={4} value={text} onChange={e => setText(e.target.value)} placeholder="Type text..." />
                    <Label style={{ fontWeight: "bold", fontSize: "30px" }}>Choose a file (no images/videos):</Label>
                    <Input type="file" onChange={handleFileChange} />
                    <Button type="submit">Encrypt</Button>
                </form>
            </Section>
        </PageWrapper>
    );
}
