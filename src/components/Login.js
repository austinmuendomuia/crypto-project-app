import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../resources/logo.png';

const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${logo}) center center/cover no-repeat;
  background-size: 100% auto;
`;

const LoginBox = styled.div`
  background: white;
  padding: 5.2rem 5.6rem;
  border-radius: 66px;
  box-shadow: 0 14px 60px rgba(0,0,0,0.18);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Input = styled.input`
  width: 370px;
  padding: 1.6rem;
  margin-bottom: 2.2rem;
  border-radius: 16px;
  border: 1.5px solid #ccc;
  font-size: 26px;
`;

const Button = styled.button`
  padding: 1.4rem 3.5rem;
  background: #0062ff;
  color: white;
  border: none;
  border-radius: 26px;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const RegisterButton = styled.button`
  margin-top: 1.3rem;
  background: none;
  color: #0062ff;
  border: none;
  font-size: 28px;
  text-decoration: underline;
  cursor: pointer;
`;

export default function Login({ onLogin }) {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: inputUsername, password: inputPassword })
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Login error!');
        return;
      } else {
        onLogin(data.username, data.profile_image);
      }
    } catch (err) {
      alert('Login failed');
    }
  };
  return (
    <LoginWrapper>
      <LoginBox>
        <h2 style={{ fontSize: '2.9rem', marginBottom: '1.7rem' }}>Login to CryptoApp</h2>
        <StyledForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username..."
            value={inputUsername}
            onChange={e => setInputUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password..."
            value={inputPassword}
            onChange={e => setInputPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
        </StyledForm>
        <RegisterButton onClick={() => navigate('/register')}>
          Register
        </RegisterButton>
      </LoginBox>
    </LoginWrapper>
  );
}
