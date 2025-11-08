// import React from 'react';
// import styled from 'styled-components';

// const PageWrapper = styled.div`
//   min-height: 100vh;
//   background: linear-gradient(120deg,#33aaff 0%,#62e5e7 100%);
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding: 50px 0 0 60px;
// `;

// const Title = styled.h1`
//   color: #262c4b;
//   font-size: 2.5rem;
//   margin-bottom: 34px;
//   font-weight: 700;
// `;

// const Section = styled.div`
//   background: #fff;
//   border-radius: 36px;
//   box-shadow: 0 10px 44px #cbdaee29;
//   padding: 54px 48px;
//   max-width: 540px;
// `;

// const Button = styled.button`
//   background: #0062ff;
//   color: white;
//   font-size: 1.85rem;
//   border: none;
//   border-radius: 30px;
//   padding: 18px 44px;
//   font-weight: 600;
//   cursor: pointer;
//   margin-top: 32px;
//   &:hover {
//     box-shadow: 0 12px 50px #00031233;
//   }
// `;

// export default function ViewEncrypted1() {
//   const handleView = () => {
//     alert('Viewing all Encrypted files/images/videos...');
//   };

//   return (
//     <PageWrapper>
//       <Title style={{ fontWeight: "bold" }}>View Encrypted</Title>
//       <Section>
//         <h2 style={{ fontSize: "30px" }}>See what you've Encrypted.</h2>
//         <Button onClick={handleView}>Click to View All Encrypted Files/Images/Videos</Button>
//       </Section>
//     </PageWrapper>
//   );
// }



import React from 'react';
import styled from 'styled-components';
import logo from '../resources/logo.png';

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
`;

const FileItem = styled.li`
  font-size: 1.55rem;
  margin-bottom: 22px;
  color: #353c56;
  background: #f1f2fa;
  border-radius: 14px;
  padding: 14px 20px;
  font-weight: 600;
  border: 1.5px solid #badcff;
  box-shadow: 0 3px 10px #bedcff23;
`;

export default function ViewEncrypted1() {
  // Replace this with real data/query from server in future!
  const encryptedFiles = [
    { name: "ImportantDoc.pdf", type: "application/pdf", date: "2025-11-07 20:50" },
    { name: "Resume.docx", type: "application/vnd.openxmlformats", date: "2025-11-08 11:31" },
    { name: "my_photo.zip", type: "application/zip", date: "2025-11-08 14:42" }
  ];

  return (
    <PageWrapper>
      <Title style={{ fontWeight: "bold", color: "red" }}>View Encrypted</Title>
      <Section>
        <h2 style={{ fontSize: "30px" }}>All your Encrypted Files:</h2>
        <FileList>
          {encryptedFiles.map(file => (
            <FileItem key={file.name + file.date}>
              <div><b>{file.name}</b></div>
              <div style={{ fontSize: "1.08rem", color: "#7599a9" }}>{file.type} — encrypted on {file.date}</div>
            </FileItem>
          ))}
        </FileList>
      </Section>
    </PageWrapper>
  );
}
