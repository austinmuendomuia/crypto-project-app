import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaCheckCircle, FaEnvelope, FaPlusCircle } from 'react-icons/fa';
import logo from '../resources/logo.png';

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

export default function Dashboard({ username, profileImage }) {
  const navigate = useNavigate();
  return (
    <MainContent>
      <Header>
        <Title style={{ color: "purple", fontSize: "91px" }}>Welcome, {username}</Title>
        <img src={profileImage ? `http://localhost:5000${profileImage}` : "https://randomuser.me/api/portraits/men/71.jpg"}
          alt="User" width={150}
          style={{ borderRadius: "50%", background: "#e9eaf0" }} />
      </Header>
      <UploadCard onClick={() => navigate('/upload-media')}>
        <FaPlusCircle style={{ marginRight: "24px", fontSize: "86px", color: "#6a5fff" }} />
        <h2 style={{ fontWeight: "bold", marginTop: 10, marginBottom: 25, fontSize: "4.6rem" }}>Upload File</h2>
      </UploadCard>
      <h2 style={{ fontSize: "3.6rem", marginTop: 30, marginBottom: 17, color: "purple", fontSize: "91px" }}>Dashboard</h2>
      <CardRow>
        <DashCard onClick={() => navigate('/encrypt-files')}>
          <IconCircle color="#675cfa"><FaLock /></IconCircle>
          <StatusBadge status="Encrypted" style={{ fontSize: "30px" }}>Encrypt</StatusBadge>
          <div>
            <div style={{ margin: "74px 0 20px 0", fontSize: 50, fontWeight: "bold" }}>Encrypt</div>
            <div style={{ fontSize: 40 }}>Encrypted on: 2025-11-06 09:47</div>
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
            <div style={{ fontSize: 40 }}>Decrypted on: 2025-10-21 16:10</div>
            <div style={{ marginTop: 30, fontSize: 24, color: "#95a7cf" }}>e01og7z...</div>
          </div>
        </DashCard>
      </CardRow>
    </MainContent>
  );
}




