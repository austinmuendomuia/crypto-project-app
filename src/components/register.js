// import React, { useState } from 'react';
// import styled from 'styled-components';
// const RegisterWrapper = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: linear-gradient(120deg,#0062ff 0%,#52e5e7 100%);
// `;
// const RegisterBox = styled.div`
//   background: white;
//   padding: 2.5rem 2rem;
//   border-radius: 16px;
//   box-shadow: 0 6px 24px rgba(0,0,0,0.15);
//   min-width: 350px;
// `;
// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: stretch;
// `;
// const Input = styled.input`
//   width: 250px;
//   padding: 0.5rem;
//   margin-bottom: 1rem;
//   border-radius: 8px;
//   border: 1px solid #ccc;
//   font-size: 16px;
// `;
// const Button = styled.button`
//   padding: 0.8rem 2rem;
//   background: #0062ff;
//   color: white;
//   border: none;
//   border-radius: 16px;
//   font-size: 18px;
//   font-weight: bold;
//   margin-top: 15px;
// `;
// export default function Register() {
//     const [form, setForm] = useState({
//         firstName: '', lastName: '', email: '', password: '', phone: '', photo: null
//     });
//     const handleChange = e => {
//         const { name, value, files } = e.target;
//         if (name === 'photo') {
//             setForm(f => ({ ...f, photo: files[0] }));
//         } else {
//             setForm(f => ({ ...f, [name]: value }));
//         }
//     };
//     const handleSubmit = e => {
//         e.preventDefault();
//         // Handle registration logic here!
//         alert('Registered!');
//     };
//     return (
//         <RegisterWrapper>
//             <RegisterBox>
//                 <h2>Register</h2>
//                 <StyledForm onSubmit={handleSubmit}>
//                     <Input name="firstName" type="text" placeholder="First name*" value={form.firstName} onChange={handleChange} required />
//                     <Input name="lastName" type="text" placeholder="Last name*" value={form.lastName} onChange={handleChange} required />
//                     <Input name="email" type="email" placeholder="Email*" value={form.email} onChange={handleChange} required />
//                     <Input name="password" type="password" placeholder="Password*" value={form.password} onChange={handleChange} required />
//                     <Input name="phone" type="tel" placeholder="Phone number (optional)" value={form.phone} onChange={handleChange} />
//                     <label style={{ fontSize: 15, marginBottom: 7 }}>Profile photo (optional)</label>
//                     <Input name="photo" type="file" accept="image/*" onChange={handleChange} />
//                     <Button type="submit">Register</Button>
//                 </StyledForm>
//             </RegisterBox>
//         </RegisterWrapper>
//     );
// }




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
  //background: linear-gradient(120deg, #0062ff 0%, #52e5e7 100%);
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
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add registration logic here
        if (inputPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Proceed with registration
        alert("Registered successfully!");
        navigate('/');
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
                    <Button type="submit">Register</Button>
                </StyledForm>
                <LoginButton onClick={() => navigate('/')}>
                    Already have an account? Login
                </LoginButton>
            </RegisterBox>
        </RegisterWrapper>
    );
}
