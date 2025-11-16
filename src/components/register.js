import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../resources/logo.png';

const RegisterWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${logo}) center center/cover no-repeat;
`;

const RegisterBox = styled.div`
  background: white;
  padding: 3.8rem 4rem;
  border-radius: 26px;
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

const LoginButton = styled.button`
  margin-top: 1.3rem;
  background: none;
  color: #0062ff;
  border: none;
  font-size: 24px;
  text-decoration: underline;
  cursor: pointer;
`;

export default function Register() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    const formData = new FormData();
    formData.append('username', inputUsername);
    formData.append('password', inputPassword);
    if (profileImage) formData.append('profileImage', profileImage);
    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        body: formData
      });
      let data;
      try {
        data = await res.json();
      } catch (err) {
        throw new Error('Invalid server response:' + err);
      }
      if (!res.ok) {
        const err = await res.json();
        alert(err.error || 'Registration Error:' + res.status);
        return;
      } else {
        alert('Registered successfully!');
        navigate('/');
      }
    } catch (err) {
      alert('Registration failed:' + err.message);
    }
  };

  return (
    <RegisterWrapper>
      <RegisterBox>
        <h2 style={{ fontSize: '2.9rem', marginBottom: '1.7rem' }}>Register for CryptoApp</h2>
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
          <Input
            type="password"
            placeholder="Confirm Password..."
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          <label style={{ marginBottom: '0.7rem', fontSize: '1.15rem' }}>Profile Image (optional):</label>
          <Input
            type="file"
            accept="image/*"
            onChange={e => setProfileImage(e.target.files[0])}
            style={{ marginBottom: '2rem' }}
          />
          <Button type="submit">Register</Button>
        </StyledForm>
        <LoginButton onClick={() => navigate('/')}>Already have an account? Login</LoginButton>
      </RegisterBox>
    </RegisterWrapper>
  );
}
