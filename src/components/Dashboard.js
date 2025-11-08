// import React from 'react';
// import styled from 'styled-components';
// import { FaLock, FaCheckCircle, FaEnvelope, FaPlusCircle } from 'react-icons/fa';

// const MainContent = styled.div`
//   margin-left: 0px;
//   padding: 48px 24px 24px 24px;
//   background: #f4f7fd;
//   min-height: 100vh;
// `;

// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const Title = styled.h1`
//   color: #353c56;
// `;

// const UploadCard = styled.div`
//   background: #fff;
//   margin: 36px 0 30px 0;
//   border-radius: 18px;
//   box-shadow: 0 4px 24px #cbdaee33;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100px;
//   font-size: 20px;
//   color: #424eef;
//   font-weight: bold;
// `;

// const CardRow = styled.div`
//   display: flex;
//   gap: 22px;
//   margin: 35px 0 0 0;
// `;

// const DashCard = styled.div`
//   background: #fff;
//   border-radius: 18px;
//   box-shadow: 0 4px 24px #cbdaee29;
//   padding: 30px 36px;
//   width: 300px;
//   text-align: center;
//   position: relative;
// `;

// const IconCircle = styled.div`
//   width: 48px;
//   height: 48px;
//   background: #f2f2fe;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: auto;
//   font-size: 28px;
//   color: ${props => props.color || "#353c56"};
//   margin-bottom: 8px;
// `;

// const StatusBadge = styled.span`
//   position: absolute;
//   top: 22px; right: 24px;
//   background: ${props => props.status === "Encrypted" ? "#ff5353" : "#48e38f"};
//   color: #fff;
//   border-radius: 12px;
//   padding: 4px 13px;
//   font-size: 13px;
// `;

// export default function Dashboard({ username }) {
//   return (
//     <MainContent>
//       <Header>
//         <Title>Welcome, {username}</Title>
//         <img src="https://randomuser.me/api/portraits/men/71.jpg" alt="User" width={44}
//           style={{ borderRadius: "50%", background: "#e9eaf0" }} />
//       </Header>
//       <UploadCard>
//         <FaPlusCircle style={{ marginRight: "8px", fontSize: "32px", color: "#6a5fff" }} />
//         Upload File
//       </UploadCard>

//       <h2>Dashboard</h2>
//       <CardRow>
//         <DashCard>
//           <IconCircle color="#675cfa"><FaLock /></IconCircle>
//           <StatusBadge status="Encrypted">Encrypted</StatusBadge>
//           <div>
//             <div style={{ margin: "16px 0 2px 0", fontSize: 15, fontWeight: "bold" }}>Encrypted</div>
//             <div style={{ fontSize: 11 }}>Encrypted on: 2025-11-06 09:47</div>
//             <div style={{ marginTop: 9, fontSize: 12, color: "#95a7cf" }}>df1s5df...</div>
//           </div>
//         </DashCard>
//         <DashCard>
//           <IconCircle color="#27d37f"><FaCheckCircle /></IconCircle>
//           <StatusBadge status="Decrypted">Decrypted</StatusBadge>
//           <div>
//             <div style={{ margin: "16px 0 2px 0", fontSize: 15, fontWeight: "bold" }}>Decrypted</div>
//             <div style={{ fontSize: 11 }}>Decrypted on: 2025-11-06 09:42</div>
//             <div style={{ marginTop: 9, fontSize: 12, color: "#95a7cf" }}>h1a6uev...</div>
//           </div>
//         </DashCard>
//         <DashCard>
//           <IconCircle color="#5cbfff"><FaEnvelope /></IconCircle>
//           <StatusBadge status="Decrypted">Decrypted</StatusBadge>
//           <div>
//             <div style={{ margin: "16px 0 2px 0", fontSize: 15, fontWeight: "bold" }}>Decrypted</div>
//             <div style={{ fontSize: 11 }}>Decrypted on: 2025-10-21 16:10</div>
//             <div style={{ marginTop: 9, fontSize: 12, color: "#95a7cf" }}>e01og7z...</div>
//           </div>
//         </DashCard>
//       </CardRow>
//     </MainContent>
//   );
// }


// import React from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { FaLock, FaCheckCircle, FaEnvelope, FaPlusCircle } from 'react-icons/fa';

// const MainContent = styled.div`
//   margin-left: 0px;
//   padding: 48px 24px 24px 24px;
//   background: #f4f7fd;
//   min-height: 100vh;
// `;
// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;
// const Title = styled.h1`
//   color: #353c56;
// `;
// const UploadCard = styled.div`
//   background: #fff;
//   margin: 36px 0 30px 0;
//   border-radius: 18px;
//   box-shadow: 0 4px 24px #cbdaee33;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100px;
//   font-size: 20px;
//   color: #424eef;
//   font-weight: bold;
//   cursor: pointer;
// `;
// const CardRow = styled.div`
//   display: flex;
//   gap: 22px;
//   margin: 35px 0 0 0;
// `;
// const DashCard = styled.div`
//   background: #fff;
//   border-radius: 18px;
//   box-shadow: 0 4px 24px #cbdaee29;
//   padding: 30px 36px;
//   width: 300px;
//   text-align: center;
//   position: relative;
//   cursor: pointer;
//   transition: box-shadow 0.12s;
//   &:hover {
//     box-shadow: 0 6px 32px #424eef33;
//   }
// `;
// const IconCircle = styled.div`
//   width: 48px;
//   height: 48px;
//   background: #f2f2fe;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: auto;
//   font-size: 28px;
//   color: ${props => props.color || "#353c56"};
//   margin-bottom: 8px;
// `;
// const StatusBadge = styled.span`
//   position: absolute;
//   top: 22px; right: 24px;
//   background: ${props => props.status === "Encrypted" ? "#ff5353" : "#48e38f"};
//   color: #fff;
//   border-radius: 12px;
//   padding: 4px 13px;
//   font-size: 13px;
// `;
// export default function Dashboard({ username }) {
//   const navigate = useNavigate();
//   return (
//     <MainContent>
//       <Header>
//         <Title>Welcome, {username}</Title>
//         <img src="https://randomuser.me/api/portraits/men/71.jpg" alt="User" width={44}
//           style={{ borderRadius: "50%", background: "#e9eaf0" }} />
//       </Header>
//       <UploadCard onClick={() => navigate('/upload-media')}>
//         <FaPlusCircle style={{ marginRight: "8px", fontSize: "32px", color: "#6a5fff" }} />
//         Upload File
//       </UploadCard>
//       <h2>Dashboard</h2>
//       <CardRow>
//         <DashCard onClick={() => navigate('/encrypt-files')}>
//           <IconCircle color="#675cfa"><FaLock /></IconCircle>
//           <StatusBadge status="Encrypted">Encrypted</StatusBadge>
//           <div>
//             <div style={{ margin: "16px 0 2px 0", fontSize: 15, fontWeight: "bold" }}>Encrypted</div>
//             <div style={{ fontSize: 11 }}>Encrypted on: 2025-11-06 09:47</div>
//             <div style={{ marginTop: 9, fontSize: 12, color: "#95a7cf" }}>df1s5df...</div>
//           </div>
//         </DashCard>
//         <DashCard onClick={() => navigate('/decrypt-files-or-media')}>
//           <IconCircle color="#27d37f"><FaCheckCircle /></IconCircle>
//           <StatusBadge status="Decrypted">Decrypted</StatusBadge>
//           <div>
//             <div style={{ margin: "16px 0 2px 0", fontSize: 15, fontWeight: "bold" }}>Decrypted</div>
//             <div style={{ fontSize: 11 }}>Decrypted on: 2025-11-06 09:42</div>
//             <div style={{ marginTop: 9, fontSize: 12, color: "#95a7cf" }}>h1a6uev...</div>
//           </div>
//         </DashCard>
//         <DashCard onClick={() => navigate('/view-decrypted')}>
//           <IconCircle color="#5cbfff"><FaEnvelope /></IconCircle>
//           <StatusBadge status="Decrypted">Decrypted</StatusBadge>
//           <div>
//             <div style={{ margin: "16px 0 2px 0", fontSize: 15, fontWeight: "bold" }}>Decrypted</div>
//             <div style={{ fontSize: 11 }}>Decrypted on: 2025-10-21 16:10</div>
//             <div style={{ marginTop: 9, fontSize: 12, color: "#95a7cf" }}>e01og7z...</div>
//           </div>
//         </DashCard>
//       </CardRow>
//     </MainContent>
//   );
// }



// import React from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { FaLock, FaCheckCircle, FaEnvelope, FaPlusCircle } from 'react-icons/fa';

// const MainContent = styled.div`
//   margin-left: 0px;
//   padding: 64px 32px 32px 32px;
//   background: #f4f7fd;
//   min-height: 100vh;
// `;
// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;
// const Title = styled.h1`
//   color: #353c56;
//   font-size: 2.4rem;
// `;
// const UploadCard = styled.div`
//   background: #fff;
//   margin: 44px 0 36px 0;
//   border-radius: 24px;
//   box-shadow: 0 6px 32px #cbdaee33;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 120px;
//   font-size: 2rem;
//   color: #424eef;
//   font-weight: bold;
//   cursor: pointer;
// `;
// const CardRow = styled.div`
//   display: flex;
//   gap: 34px;
//   margin: 44px 0 0 0;
// `;
// const DashCard = styled.div`
//   background: #fff;
//   border-radius: 24px;
//   box-shadow: 0 8px 36px #cbdaee29;
//   padding: 44px 48px;
//   width: 370px;
//   text-align: center;
//   position: relative;
//   cursor: pointer;
//   transition: box-shadow 0.12s;
//   &:hover {
//     box-shadow: 0 10px 40px #424eef33;
//   }
// `;
// const IconCircle = styled.div`
//   width: 68px;
//   height: 68px;
//   background: #f2f2fe;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: auto;
//   font-size: 38px;
//   color: ${props => props.color || "#353c56"};
//   margin-bottom: 16px;
// `;
// const StatusBadge = styled.span`
//   position: absolute;
//   top: 32px; right: 32px;
//   background: ${props => props.status === "Encrypted" ? "#ff5353" : "#48e38f"};
//   color: #fff;
//   border-radius: 14px;
//   padding: 6px 18px;
//   font-size: 1rem;
// `;

// export default function Dashboard({ username }) {
//   const navigate = useNavigate();
//   return (
//     <MainContent>
//       <Header>
//         <Title>Welcome, {username}</Title>
//         <img src="https://randomuser.me/api/portraits/men/71.jpg" alt="User" width={58}
//           style={{ borderRadius: "50%", background: "#e9eaf0" }} />
//       </Header>
//       <UploadCard onClick={() => navigate('/upload-media')}>
//         <FaPlusCircle style={{ marginRight: "16px", fontSize: "44px", color: "#6a5fff" }} />
//         Upload File
//       </UploadCard>
//       <h2 style={{ fontSize: "2rem", marginTop: 10, marginBottom: 12 }}>Dashboard</h2>
//       <CardRow>
//         <DashCard onClick={() => navigate('/encrypt-files')}>
//           <IconCircle color="#675cfa"><FaLock /></IconCircle>
//           <StatusBadge status="Encrypted">Encrypted</StatusBadge>
//           <div>
//             <div style={{ margin: "18px 0 6px 0", fontSize: 22, fontWeight: "bold" }}>Encrypted</div>
//             <div style={{ fontSize: 15 }}>Encrypted on: 2025-11-06 09:47</div>
//             <div style={{ marginTop: 11, fontSize: 17, color: "#95a7cf" }}>df1s5df...</div>
//           </div>
//         </DashCard>
//         <DashCard onClick={() => navigate('/decrypt-files-or-media')}>
//           <IconCircle color="#27d37f"><FaCheckCircle /></IconCircle>
//           <StatusBadge status="Decrypted">Decrypted</StatusBadge>
//           <div>
//             <div style={{ margin: "18px 0 6px 0", fontSize: 22, fontWeight: "bold" }}>Decrypted</div>
//             <div style={{ fontSize: 15 }}>Decrypted on: 2025-11-06 09:42</div>
//             <div style={{ marginTop: 11, fontSize: 17, color: "#95a7cf" }}>h1a6uev...</div>
//           </div>
//         </DashCard>
//         <DashCard onClick={() => navigate('/view-decrypted')}>
//           <IconCircle color="#5cbfff"><FaEnvelope /></IconCircle>
//           <StatusBadge status="Decrypted">Decrypted</StatusBadge>
//           <div>
//             <div style={{ margin: "18px 0 6px 0", fontSize: 22, fontWeight: "bold" }}>Decrypted</div>
//             <div style={{ fontSize: 15 }}>Decrypted on: 2025-10-21 16:10</div>
//             <div style={{ marginTop: 11, fontSize: 17, color: "#95a7cf" }}>e01og7z...</div>
//           </div>
//         </DashCard>
//       </CardRow>
//     </MainContent>
//   );
// }




// import React from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { FaLock, FaCheckCircle, FaEnvelope, FaPlusCircle } from 'react-icons/fa';

// const MainContent = styled.div`
//   margin-left: 0px;
//   padding: 90px 48px 48px 48px;
//   background: #f4f7fd;
//   min-height: 100vh;
// `;
// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;
// const Title = styled.h1`
//   color: #353c56;
//   font-size: 3rem;
// `;
// const UploadCard = styled.div`
//   background: #fff;
//   margin: 54px 0 45px 0;
//   border-radius: 32px;
//   box-shadow: 0 10px 48px #cbdaee33;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 160px;
//   font-size: 2.4rem;
//   color: #424eef;
//   font-weight: bold;
//   cursor: pointer;
// `;
// const CardRow = styled.div`
//   display: flex;
//   gap: 54px;
//   margin: 60px 0 0 0;
//   justify-content: flex-start;
//   flex-wrap: wrap;
// `;
// const DashCard = styled.div`
//   background: #fff;
//   border-radius: 34px;
//   box-shadow: 0 16px 60px #cbdaee29;
//   padding: 70px 70px;
//   width: 520px;
//   text-align: center;
//   position: relative;
//   cursor: pointer;
//   transition: box-shadow 0.12s;
//   &:hover {
//     box-shadow: 0 16px 64px #424eef33;
//   }
// `;
// const IconCircle = styled.div`
//   width: 108px;
//   height: 108px;
//   background: #f2f2fe;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: auto;
//   font-size: 72px;
//   color: ${props => props.color || "#353c56"};
//   margin-bottom: 24px;
// `;
// const StatusBadge = styled.span`
//   position: absolute;
//   top: 38px; right: 42px;
//   background: ${props => props.status === "Encrypted" ? "#ff5353" : "#48e38f"};
//   color: #fff;
//   border-radius: 17px;
//   padding: 12px 34px;
//   font-size: 1.45rem;
// `;

// export default function Dashboard({ username }) {
//   const navigate = useNavigate();
//   return (
//     <MainContent>
//       <Header>
//         <Title>Welcome, {username}</Title>
//         <img src="https://randomuser.me/api/portraits/men/71.jpg" alt="User" width={84}
//           style={{ borderRadius: "50%", background: "#e9eaf0" }} />
//       </Header>
//       <UploadCard onClick={() => navigate('/upload-media')}>
//         <FaPlusCircle style={{ marginRight: "24px", fontSize: "64px", color: "#6a5fff" }} />
//         Upload File
//       </UploadCard>
//       <h2 style={{ fontSize: "2.8rem", marginTop: 20, marginBottom: 16 }}>Dashboard</h2>
//       <CardRow>
//         <DashCard onClick={() => navigate('/encrypt-files')}>
//           <IconCircle color="#675cfa"><FaLock /></IconCircle>
//           <StatusBadge status="Encrypted">Encrypted</StatusBadge>
//           <div>
//             <div style={{ margin: "28px 0 9px 0", fontSize: 38, fontWeight: "bold" }}>Encrypted</div>
//             <div style={{ fontSize: 24 }}>Encrypted on: 2025-11-06 09:47</div>
//             <div style={{ marginTop: 19, fontSize: 27, color: "#95a7cf" }}>df1s5df...</div>
//           </div>
//         </DashCard>
//         <DashCard onClick={() => navigate('/decrypt-files-or-media')}>
//           <IconCircle color="#27d37f"><FaCheckCircle /></IconCircle>
//           <StatusBadge status="Decrypted">Decrypted</StatusBadge>
//           <div>
//             <div style={{ margin: "28px 0 9px 0", fontSize: 38, fontWeight: "bold" }}>Decrypted</div>
//             <div style={{ fontSize: 24 }}>Decrypted on: 2025-11-06 09:42</div>
//             <div style={{ marginTop: 19, fontSize: 27, color: "#95a7cf" }}>h1a6uev...</div>
//           </div>
//         </DashCard>
//         <DashCard onClick={() => navigate('/view-decrypted')}>
//           <IconCircle color="#5cbfff"><FaEnvelope /></IconCircle>
//           <StatusBadge status="Decrypted">Decrypted</StatusBadge>
//           <div>
//             <div style={{ margin: "28px 0 9px 0", fontSize: 38, fontWeight: "bold" }}>Decrypted</div>
//             <div style={{ fontSize: 24 }}>Decrypted on: 2025-10-21 16:10</div>
//             <div style={{ marginTop: 19, fontSize: 27, color: "#95a7cf" }}>e01og7z...</div>
//           </div>
//         </DashCard>
//       </CardRow>
//     </MainContent>
//   );
// }

// import React from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { FaLock, FaCheckCircle, FaEnvelope, FaPlusCircle } from 'react-icons/fa';

// const MainContent = styled.div`
//   margin-left: 0px;
//   padding: 90px 3vw 48px 3vw;
//   background: #f4f7fd;
//   min-height: 100vh;
// `;

// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 54px;
// `;

// const Title = styled.h1`
//   color: #353c56;
//   font-size: 3.2vw;
//   font-weight: 600;
// `;

// const UploadCard = styled.div`
//   background: #fff;
//   margin: 30px 0 60px 0;
//   border-radius: 32px;
//   box-shadow: 0 10px 48px #cbdaee33;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 10vh;
//   font-size: 2.3vw;
//   color: #424eef;
//   font-weight: bold;
//   cursor: pointer;
// `;

// const CardRow = styled.div`
//   display: flex;
//   gap: 4vw;
//   margin: 70px 0 0 0;
//   justify-content: center;
//   flex-wrap: wrap;
// `;

// const DashCard = styled.div`
//   background: #fff;
//   border-radius: 34px;
//   box-shadow: 0 16px 60px #cbdaee29;
//   padding: 54px 54px;
//   width: 430px;
//   text-align: center;
//   position: relative;
//   cursor: pointer;
//   transition: box-shadow 0.12s;
//   &:hover {
//     box-shadow: 0 16px 64px #424eef33;
//   }
// `;

// const IconCircle = styled.div`
//   width: 88px;
//   height: 88px;
//   background: #f2f2fe;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: auto;
//   font-size: 60px;
//   color: ${props => props.color || "#353c56"};
//   margin-bottom: 18px;
// `;

// const StatusBadge = styled.span`
//   position: absolute;
//   top: 28px; right: 32px;
//   background: ${props => props.status === "Encrypted" ? "#ff5353" : "#48e38f"};
//   color: #fff;
//   border-radius: 17px;
//   padding: 9px 28px;
//   font-size: 1.15rem;
// `;

// export default function Dashboard({ username }) {
//   const navigate = useNavigate();
//   return (
//     <MainContent>
//       <Header>
//         <Title>Welcome, {username}</Title>
//         <img src="https://randomuser.me/api/portraits/men/71.jpg" alt="User" width={75}
//           style={{ borderRadius: "50%", background: "#e9eaf0" }} />
//       </Header>
//       <UploadCard onClick={() => navigate('/upload-media')}>
//         <FaPlusCircle style={{ marginRight: "24px", fontSize: "54px", color: "#6a5fff" }} />
//         Upload File
//       </UploadCard>
//       <h2 style={{ fontSize: "2.3vw", marginTop: 15, marginBottom: 16 }}>Dashboard</h2>
//       <CardRow>
//         <DashCard onClick={() => navigate('/encrypt-files')}>
//           <IconCircle color="#675cfa"><FaLock /></IconCircle>
//           <StatusBadge status="Encrypted">Encrypted</StatusBadge>
//           <div>
//             <div style={{ margin: "18px 0 9px 0", fontSize: 27, fontWeight: "bold" }}>Encrypted</div>
//             <div style={{ fontSize: 17 }}>Encrypted on: 2025-11-06 09:47</div>
//             <div style={{ marginTop: 13, fontSize: 19, color: "#95a7cf" }}>df1s5df...</div>
//           </div>
//         </DashCard>
//         <DashCard onClick={() => navigate('/decrypt-files-or-media')}>
//           <IconCircle color="#27d37f"><FaCheckCircle /></IconCircle>
//           <StatusBadge status="Decrypted">Decrypted</StatusBadge>
//           <div>
//             <div style={{ margin: "18px 0 9px 0", fontSize: 27, fontWeight: "bold" }}>Decrypted</div>
//             <div style={{ fontSize: 17 }}>Decrypted on: 2025-11-06 09:42</div>
//             <div style={{ marginTop: 13, fontSize: 19, color: "#95a7cf" }}>h1a6uev...</div>
//           </div>
//         </DashCard>
//         <DashCard onClick={() => navigate('/view-decrypted')}>
//           <IconCircle color="#5cbfff"><FaEnvelope /></IconCircle>
//           <StatusBadge status="Decrypted">Decrypted</StatusBadge>
//           <div>
//             <div style={{ margin: "18px 0 9px 0", fontSize: 27, fontWeight: "bold" }}>Decrypted</div>
//             <div style={{ fontSize: 17 }}>Decrypted on: 2025-10-21 16:10</div>
//             <div style={{ marginTop: 13, fontSize: 19, color: "#95a7cf" }}>e01og7z...</div>
//           </div>
//         </DashCard>
//       </CardRow>
//     </MainContent>
//   );
// }

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaCheckCircle, FaEnvelope, FaPlusCircle } from 'react-icons/fa';
import logo from '../resources/logo.png';

/*const MainContent = styled.div`
  margin-left: 0px;
  padding: 90px 5vw 48px 5vw;
  background: #f4f7fd;
  min-height: 100vh;
`;*/

const MainContent = styled.div`
  margin-left: 0px;
  padding: 90px 5vw 48px 5vw;
  background: url(${logo}) center center/cover no-repeat;
 
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  color: #353c56;
  font-size: 3.6rem;
  font-weight: 600;
`;

const UploadCard = styled.div`
  background: #fff;
  margin: 50px 0 78px 0;
  border-radius: 32px;
  box-shadow: 0 10px 48px #cbdaee33;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  font-size: 5.2rem;
  color: #424eef;
  font-weight: bold;
  cursor: pointer;
   &:hover {
    box-shadow: 0 12px 50px #424eef33;
  }
`;

const CardRow = styled.div`
  display: flex;
  gap: 60px;
  margin: 80px 0 0 0;
  justify-content: center;
  flex-wrap: wrap;
`;

const DashCard = styled.div`
  background: #fff;
  border-radius: 32px;
  box-shadow: 0 10px 44px #cbdaee29;
  padding: 68px 268px;
  width: 490px;
  min-height: 310px;
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.12s;
  &:hover {
    box-shadow: 0 12px 50px #424eef33;
  }
`;

const IconCircle = styled.div`
  width: 110px;
  height: 110px;
  background: #f2f2fe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-size: 74px;
  color: ${props => props.color || "#353c56"};
  margin-bottom: 24px;
  
`;

const StatusBadge = styled.span`
  position: absolute;
  top: 48px; right: 50px;
  background: ${props => props.status === "Encrypted" ? "#ff5353" : "#48e38f"};
  color: #fff;
  border-radius: 18px;
  padding: 12px 40px;
  font-size: 1.35rem;
`;

export default function Dashboard({ username }) {
  const navigate = useNavigate();
  return (
    <MainContent>
      <Header>
        <Title style={{ color: "blue", fontSize: "91px" }}>Welcome, {username}</Title>
        <img src="https://randomuser.me/api/portraits/men/71.jpg" alt="User" width={150}
          style={{ borderRadius: "50%", background: "#e9eaf0" }} />

      </Header>
      <UploadCard onClick={() => navigate('/upload-media')}>
        <FaPlusCircle style={{ marginRight: "24px", fontSize: "86px", color: "#6a5fff" }} />
        <h2 style={{ fontWeight: "bold", marginTop: 10, marginBottom: 25, fontSize: "4.6rem" }}>Upload File</h2>
      </UploadCard>
      <h2 style={{ fontSize: "3.6rem", marginTop: 30, marginBottom: 17, color: "blue", fontSize: "91px" }}>Dashboard</h2>
      <CardRow>
        <DashCard onClick={() => navigate('/encrypt-files')}>
          <IconCircle color="#675cfa"><FaLock /></IconCircle>
          <StatusBadge status="Encrypted" style={{ fontSize: "30px" }}>Encrypt</StatusBadge>
          <div>
            <div style={{ margin: "74px 0 20px 0", fontSize: 50, fontWeight: "bold" }}>Encrypt</div>
            <div style={{ fontSize: 40 }}>Encrypted on: 2025-11-06 09:47</div>{ /*add encrypted on date(timestamp)*/}
            <div style={{ marginTop: 30, fontSize: 24, color: "#95a7cf" }}>df1s5df...</div>
          </div>
        </DashCard>
        <DashCard onClick={() => navigate('/decrypt-files-or-media')}>
          <IconCircle color="#27d37f"><FaCheckCircle /></IconCircle>
          <StatusBadge status="Decrypted" style={{ fontSize: "30px" }}>Decrypt</StatusBadge>
          <div>
            <div style={{ margin: "74px 0 20px 0", fontSize: 50, fontWeight: "bold" }}>Decrypt</div>
            <div style={{ fontSize: 40 }}>Decrypted on: 2025-11-06 09:42</div>
            <div style={{ marginTop: 30, fontSize: 24, color: "#95a7cf" }}>h1a6uev...</div>
          </div>
        </DashCard>
        <DashCard onClick={() => navigate('/view-Encrypted')}>
          <IconCircle color="#5cbfff"><FaEnvelope /></IconCircle>
          <StatusBadge status="Encrypted" style={{ fontSize: "30px" }}>Encrypted</StatusBadge>
          <div>
            <div style={{ margin: "74px 0 20px 0", fontSize: 50, fontWeight: "bold" }}>View Encrypted</div>
            <div style={{ fontSize: 40 }}>Decrypted on: 2025-10-21 16:10</div> {/*add view encrypted on date(timestamp)*/}
            <div style={{ marginTop: 30, fontSize: 24, color: "#95a7cf" }}>e01og7z...</div>
          </div>
        </DashCard>
      </CardRow>
    </MainContent>
  );
}





// import React from 'react';
// import styled from 'styled-components';
// import { FaLock, FaCheckCircle, FaEnvelope, FaPlusCircle } from 'react-icons/fa';

// // Match this exactly to your sidebar width:
// const SIDEBAR_WIDTH = 190;

// const MainContent = styled.div`
//   min-height: 100vh;
//   width: 100vw;
//   font-family: 'Poppins', sans-serif;
//   background: none;
//   display: flex;
// `;

// const Container = styled.div`
//   flex: 1;
//   width: 100vw;
//   padding-left: ${SIDEBAR_WIDTH}px;  /* flush to sidebar */
//   padding-top: 38px;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `;

// const HeaderRow = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 18px;
//   margin-bottom: 20px;
// `;

// const Title = styled.h1`
//   color: #fff;
//   font-weight: 700;
//   font-size: 2.2rem;
//   margin: 0;
// `;

// const Avatar = styled.img`
//   width: 48px;
//   height: 48px;
//   border-radius: 50%;
//   object-fit: cover;
//   border: 2px solid #e7e6f4;
// `;

// const UploadCard = styled.div`
//   background: #fff;
//   margin-bottom: 26px;
//   border-radius: 18px;
//   box-shadow: 0 6px 50px #2a24dc15;
//   display: flex;
//   align-items: center;
//   height: 72px;
//   width: 400px;
//   font-size: 21px;
//   font-weight: 500;
//   color: #4327dc;
//   padding-left: 28px;
//   cursor: pointer;
//   transition: box-shadow 0.15s, color 0.15s;
//   &:hover {
//     box-shadow: 0 10px 36px #40309b33;
//     color: #1c28db;
//   }
// `;

// const SectionTitle = styled.h2`
//   color: #fff;
//   font-size: 1.6rem;
//   font-weight: 700;
//   margin: 0 0 16px 0;
// `;

// const CardRow = styled.div`
//   display: flex;
//   gap: 28px;
//   width: 100vw;
//   overflow-x: auto;
// `;

// const DashCard = styled.div`
//   background: #fff;
//   border-radius: 18px;
//   box-shadow: 0 8px 28px #43397818;
//   padding: 28px 16px 22px 16px;
//   width: 220px;
//   min-width: 220px;
//   text-align: center;
//   position: relative;
//   transition: box-shadow 0.15s, transform 0.15s;
//   &:hover {
//     box-shadow: 0 10px 38px #3327bf2a;
//     transform: translateY(-4px) scale(1.03);
//   }
// `;


// const IconCircle = styled.div`
//   width: 54px;
//   height: 54px;
//   background: #f5f3ff;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto 13px auto;
//   font-size: 30px;
//   color: ${props => props.color || "#353c56"};
// `;

// const StatusBadge = styled.span`
//   position: absolute;
//   top: 18px; right: 20px;
//   background: ${props => props.status === "Encrypted" ? "#ff5656" : "#54e992"};
//   color: #fff;
//   border-radius: 14px;
//   padding: 4px 16px;
//   font-size: 12.5px;
//   font-weight: 500;
// `;

// const CardTitle = styled.div`
//   font-size: 17px;
//   font-weight: 700;
//   color: #3a2bf0;
//   margin-top: 13px;
//   margin-bottom: 2px;
// `;

// const Muted = styled.div`
//   font-size: 13px;
//   color: #8787ae;
//   margin-bottom: 3px;
// `;

// const DataTiny = styled.div`
//   margin-top: 7px;
//   font-size: 13px;
//   color: #8c8caf;
// `;

// export default function Dashboard({ username }) {
//   return (
//     <MainContent>
//       <Container>
//         <HeaderRow>
//           <Title>Welcome, {username}</Title>
//           <Avatar src="https://randomuser.me/api/portraits/men/76.jpg" alt="User" />
//         </HeaderRow>
//         <UploadCard>
//           <FaPlusCircle style={{ marginRight: "13px", fontSize: "28px" }} />
//           Upload File
//         </UploadCard>
//         <SectionTitle>Dashboard</SectionTitle>
//         <CardRow>
//           <DashCard>
//             <IconCircle color="#675cfa"><FaLock /></IconCircle>
//             <StatusBadge status="Encrypted">Encrypted</StatusBadge>
//             <CardTitle>Encrypted</CardTitle>
//             <Muted>Encrypted on: 2025-11-06 09:47</Muted>
//             <DataTiny>df1s5df...</DataTiny>
//           </DashCard>
//           <DashCard>
//             <IconCircle color="#27d37f"><FaCheckCircle /></IconCircle>
//             <StatusBadge status="Decrypted">Decrypted</StatusBadge>
//             <CardTitle>Decrypted</CardTitle>
//             <Muted>Decrypted on: 2025-11-06 09:42</Muted>
//             <DataTiny>h1a6uev...</DataTiny>
//           </DashCard>
//           <DashCard>
//             <IconCircle color="#5cbfff"><FaEnvelope /></IconCircle>
//             <StatusBadge status="Decrypted">Decrypted</StatusBadge>
//             <CardTitle>Decrypted</CardTitle>
//             <Muted>Decrypted on: 2025-10-21 16:10</Muted>
//             <DataTiny>e01og7z...</DataTiny>
//           </DashCard>
//         </CardRow>
//       </Container>
//     </MainContent>
//   );
// }
