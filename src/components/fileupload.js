// import React, { useState } from 'react';
// import styled from 'styled-components';
// import logo from '../resources/logo.png';

// const PageWrapper = styled.div`
//   min-height: 100vh;
//   background: url(${logo}) center center/cover no-repeat;
//   //background: linear-gradient(120deg,#33aaff 0%,#62e5e7 100%);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 600px 0 0 60px;
// `;

// const Title = styled.h1`
//   color: #262c4b;
//   font-size: 2.6rem;
//   margin-bottom: 48px;
//   font-weight: 700;
// `;

// const Section = styled.div`
//   background: #fff;
//   border-radius: 56px;
//   box-shadow: 0 10px 44px #cbdaee29;
//   padding: 54px 68px;
//   max-width: 540px;
// `;

// const Label = styled.label`
//   font-size: 1.8rem;
//   font-weight: 900;
//   color: #353c56;
//   margin-bottom: 20px;
//   display: block;
// `;

// const Input = styled.input`
//   font-size: 1.8rem;
//   padding: 18px;
//   margin-bottom: 20px;
//   border-radius: 10px;
//   border: 6.5px solid #ccc;
//   width: 100%;
// `;

// const Button = styled.button`
//   background: #0062ff;
//   color: white;
//   font-size: 1.8rem;
//   border: none;
//   border-radius: 28px;
//   padding: 18px 40px;
//   font-weight: 600;
//   cursor: pointer;
// `;



// export default function UploadMedia1({ username }) {
//   const [media, setMedia] = useState(null);

//   const handleFileChange = e => {
//     const selected = e.target.files[0];
//     if (selected && (selected.type.startsWith('image/') || selected.type.startsWith('video/'))) {
//       setMedia(selected);
//     } else {
//       setMedia(null);
//       alert('Only image or video files are allowed for this input.');
//     }
//   };

//   const handleUpload = async e => {
//     e.preventDefault();
//     if (!media) return alert('Please select an image or video first.');
//     const formData = new FormData();
//     formData.append('media', media);
//     formData.append('username', username); // add username as needed
//     try {
//       const res = await fetch('http://localhost:5000/api/encrypt-media', {
//         method: 'POST',
//         body: formData,
//       });
//       if (!res.ok) throw new Error('Upload/Encryption failed');
//       alert('Media encrypted and saved!');
//       setMedia(null);
//     } catch {
//       alert('Encryption failed');
//     }
//   };

//   return (
//     <PageWrapper>
//       <Title style={{ color: 'red' }}>Encrypt Images/Videos</Title>
//       <Section>
//         <form onSubmit={handleUpload}>
//           <Label>Choose an image or video:</Label>
//           <Input type="file" accept="image/*,video/*" onChange={handleFileChange} />
//           <Button type="submit">Encrypt Media</Button>
//         </form>
//       </Section>
//     </PageWrapper>
//   );
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
  padding: 600px 0 0 60px;
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

export default function UploadMedia1({ username }) {
  const [file, setFile] = useState(null);

  const handleFileChange = e => {
    const selected = e.target.files[0];
    setFile(selected);
  };

  const handleEncrypt = async e => {
    e.preventDefault();
    if (!file) return alert('Please select a file to encrypt.');
    const formData = new FormData();
    formData.append('file', file);
    formData.append('username', username);
    try {
      const res = await fetch('http://localhost:5000/api/encrypt-media', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('File encryption failed');
      alert('File encrypted and saved!');
      setFile(null);
    } catch {
      alert('Encryption failed');
    }
  };

  return (
    <PageWrapper>
      <Title style={{ color: 'red' }}>Encrypt Any File</Title>
      <Section>
        <form onSubmit={handleEncrypt}>
          <Label>Choose any file type:</Label>
          <Input type="file" onChange={handleFileChange} />
          <Button type="submit">Encrypt File</Button>
        </form>
      </Section>
    </PageWrapper>
  );
}
