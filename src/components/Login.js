// import React, { useState } from 'react';
// import styled from 'styled-components';

// const LoginWrapper = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: linear-gradient(120deg,#0062ff 0%,#52e5e7 100%);
// `;

// const LoginBox = styled.div`
//   background: white;
//   padding: 2rem;
//   border-radius: 16px;
//   box-shadow: 0 6px 24px rgba(0,0,0,0.15);
// `;

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;      // Ensures vertical stacking
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
// `;

// export default function Login({ onLogin }) {
//   const [inputUsername, setInputUsername] = useState('');
//   const [inputPassword, setInputPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputUsername) {
//       onLogin(inputUsername);
//     }
//   };

//   return (
//     <LoginWrapper>
//       <LoginBox>
//         <h2>Login to CryptoApp</h2>
//         <StyledForm onSubmit={handleSubmit}>
//           <Input
//             type="text"
//             placeholder="Username..."
//             value={inputUsername}
//             onChange={e => setInputUsername(e.target.value)}
//             required
//           />
//           <Input
//             type="password"
//             placeholder="Password..."
//             value={inputPassword}
//             onChange={e => setInputPassword(e.target.value)}
//             required
//           />
//           <Button type="submit">Login</Button>
//         </StyledForm>
//       </LoginBox>
//     </LoginWrapper>
//   );
// }




// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// const LoginWrapper = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: linear-gradient(120deg,#0062ff 0%,#52e5e7 100%);
// `;
// const LoginBox = styled.div`
//   background: white;
//   padding: 2rem;
//   border-radius: 16px;
//   box-shadow: 0 6px 24px rgba(0,0,0,0.15);
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
// `;
// const RegisterButton = styled.button`
//   margin-top: 0.6rem;
//   background: none;
//   color: #0062ff;
//   border: none;
//   font-size: 16px;
//   text-decoration: underline;
//   cursor: pointer;
// `;
// export default function Login({ onLogin }) {
//   const [inputUsername, setInputUsername] = useState('');
//   const [inputPassword, setInputPassword] = useState('');
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputUsername) {
//       onLogin(inputUsername);
//     }
//   };
//   return (
//     <LoginWrapper>
//       <LoginBox>
//         <h2>Login to CryptoApp</h2>
//         <StyledForm onSubmit={handleSubmit}>
//           <Input
//             type="text"
//             placeholder="Username..."
//             value={inputUsername}
//             onChange={e => setInputUsername(e.target.value)}
//             required
//           />
//           <Input
//             type="password"
//             placeholder="Password..."
//             value={inputPassword}
//             onChange={e => setInputPassword(e.target.value)}
//             required
//           />
//           <Button type="submit">Login</Button>
//         </StyledForm>
//         <RegisterButton onClick={() => navigate('/register')}>
//           Register
//         </RegisterButton>
//       </LoginBox>
//     </LoginWrapper>
//   );
// }




// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

// const LoginWrapper = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: linear-gradient(120deg,#0062ff 0%,#52e5e7 100%);
// `;

// const LoginBox = styled.div`
//   background: white;
//   padding: 3rem 3.5rem;
//   border-radius: 20px;
//   box-shadow: 0 10px 40px rgba(0,0,0,0.18);
// `;

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: stretch;
// `;

// const Input = styled.input`
//   width: 340px;
//   padding: 1.2rem;
//   margin-bottom: 1.6rem;
//   border-radius: 12px;
//   border: 1px solid #ccc;
//   font-size: 22px;
// `;

// const Button = styled.button`
//   padding: 1.2rem 3.2rem;
//   background: #0062ff;
//   color: white;
//   border: none;
//   border-radius: 22px;
//   font-size: 26px;
//   font-weight: bold;
//   margin-bottom: 1rem;
// `;

// const RegisterButton = styled.button`
//   margin-top: 1.1rem;
//   background: none;
//   color: #0062ff;
//   border: none;
//   font-size: 20px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

// export default function Login({ onLogin }) {
//   const [inputUsername, setInputUsername] = useState('');
//   const [inputPassword, setInputPassword] = useState('');
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputUsername) {
//       onLogin(inputUsername);
//     }
//   };
//   return (
//     <LoginWrapper>
//       <LoginBox>
//         <h2 style={{ fontSize: '2.3rem', marginBottom: '1.2rem' }}>Login to CryptoApp</h2>
//         <StyledForm onSubmit={handleSubmit}>
//           <Input
//             type="text"
//             placeholder="Username..."
//             value={inputUsername}
//             onChange={e => setInputUsername(e.target.value)}
//             required
//           />
//           <Input
//             type="password"
//             placeholder="Password..."
//             value={inputPassword}
//             onChange={e => setInputPassword(e.target.value)}
//             required
//           />
//           <Button type="submit">Login</Button>
//         </StyledForm>
//         <RegisterButton onClick={() => navigate('/register')}>
//           Register
//         </RegisterButton>
//       </LoginBox>
//     </LoginWrapper>
//   );
// }




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
  // background: linear-gradient(120deg, #0062ff 0%, #52e5e7 100%);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputUsername) {
      onLogin(inputUsername);
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
