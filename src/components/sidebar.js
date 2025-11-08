// import React from 'react';
// import styled from 'styled-components';
// import { FaHome, FaSignOutAlt, FaCog, FaDatabase, FaSignInAlt } from 'react-icons/fa';

// const SideBar = styled.div`
//   width: 170px;
//   min-width: 50px;
//   min-height: 100vh;
//   background: linear-gradient(180deg, #3727a5 80%, #4571e7 100%);
//   color: #fff;
//   padding: 40px 0 0 40px;
//   border-radius: 0 0 0 24px;
//   display: flex;
//   flex-direction: column;
//   @media (max-width: 700px) {
//     width: 170px; min-width: 55px; // collapse on mobile!
//     padding: 90px 0 0 0;
//   }
// `;

// const Menu = styled.ul`
//   list-style: none;
//   margin: 0; padding: 0;
// `;

// const MenuItem = styled.li`
//   padding: 18px 32px 18px 32px;
//   font-size: 17px;
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   color: #e1eaff;
//   &:hover { background: #22177b; }
// `;

// const Icon = styled.span`
//   margin-right: 18px;
// `;

// export default function Sidebar() {
//   return (
//     <SideBar>
//       <Menu>
//         <MenuItem><Icon><FaSignInAlt /></Icon>Login</MenuItem>
//         <MenuItem><Icon><FaHome /></Icon>Home</MenuItem>
//         <MenuItem><Icon><FaDatabase /></Icon>Dashboard</MenuItem>
//         <MenuItem><Icon><FaCog /></Icon>Settings</MenuItem>
//         <MenuItem><Icon><FaSignOutAlt /></Icon>Logout</MenuItem>
//       </Menu>
//     </SideBar>
//   );
// }


// import React from 'react';
// import styled from 'styled-components';
// import { FaHome, FaSignOutAlt } from 'react-icons/fa';

// const SideBar = styled.div`
//   width: 170px;
//   min-width: 50px;
//   min-height: 100vh;
//   background: linear-gradient(180deg, #3727a5 80%, #4571e7 100%);
//   color: #fff;
//   padding: 40px 0 0 40px;
//   border-radius: 0 0 0 24px;
//   display: flex;
//   flex-direction: column;
//   @media (max-width: 700px) {
//     width: 170px; min-width: 55px;
//     padding: 90px 0 0 0;
//   }
// `;
// const Menu = styled.ul`
//   list-style: none;
//   margin: 0; padding: 0;
// `;
// const MenuItem = styled.li`
//   padding: 18px 32px 18px 32px;
//   font-size: 17px;
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   color: #e1eaff;
//   &:hover { background: #22177b; }
// `;
// const Icon = styled.span`
//   margin-right: 18px;
// `;
// export default function Sidebar() {
//   return (
//     <SideBar>
//       <Menu>
//         <MenuItem><Icon><FaHome /></Icon>Home</MenuItem>
//         <MenuItem><Icon><FaSignOutAlt /></Icon>Logout</MenuItem>
//       </Menu>
//     </SideBar>
//   );
// }



// import React from 'react';
// import styled from 'styled-components';
// import { FaHome, FaSignOutAlt } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const SideBar = styled.div`
//   width: 220px;
//   min-height: 100vh;
//   background: linear-gradient(180deg, #3762ff 0%, #42e7e5 100%);
//   color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding-top: 3rem;
//   font-size: 2.1rem;
// `;

// const SidebarButton = styled.button`
//   background: none;
//   border: none;
//   color: inherit;
//   font-size: 1.8rem;
//   cursor: pointer;
//   margin-top: 2.7rem;
//   display: flex;
//   align-items: center;
// `;

// const MenuItem = styled.div`
//   margin-bottom: 2.2rem;
//   display: flex;
//   align-items: center;
//   font-size: 1.7rem;
//   cursor: pointer;
// `;

// function Sidebar({ onLogout }) {
//   const navigate = useNavigate();
//   return (
//     <SideBar>
//       <h1 style={{ marginBottom: '3rem', fontSize: '2.1rem' }}>CryptoApp</h1>
//       <MenuItem onClick={() => navigate('/')}>
//         <FaHome size={38} style={{ marginRight: 22 }} /> Home
//       </MenuItem>
//       <SidebarButton onClick={() => { onLogout(); navigate('/'); }}>
//         <FaSignOutAlt size={34} style={{ marginRight: 18 }} />
//         <span>Logout</span>
//       </SidebarButton>
//     </SideBar>
//   );
// }

// export default Sidebar;




import React from 'react';
import styled from 'styled-components';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../resources/logo.png';

const SideBar = styled.div`
  width: 220px;
  min-height: 100vh;
  //background: url(${logo}) center center/cover no-repeat;
  //background: linear-gradient(180deg, #3762ff 0%, #42e7e5 100%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  font-size: 2.8rem;
`;

const SidebarButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 2.8rem;
  cursor: pointer;
  margin-top: 4.7rem;
  display: flex;
  align-items: center;
   &:hover {
    box-shadow: 0 12px 50px #01010b33;
  }
`;

const MenuItem = styled.div`
  margin-bottom: 4.7rem;
  display: flex;
  align-items: center;
  font-size: 2.8rem;
  cursor: pointer;
   &:hover {
    box-shadow: 0 12px 50px #00031233;
  }
  `;

export default function Sidebar({ onLogout }) {
  const navigate = useNavigate();
  return (
    <SideBar>
      <h1 style={{ marginBottom: '7rem', fontSize: '2.8rem' }}>CryptoApp</h1>
      <MenuItem onClick={() => navigate('/')}>
        <FaHome size={38} style={{ marginRight: 22 }} /> Home
      </MenuItem>
      <SidebarButton onClick={() => { onLogout(); navigate('/'); }}>
        <FaSignOutAlt size={34} style={{ marginRight: 18 }} />
        <span>Logout</span>
      </SidebarButton>
    </SideBar>
  );
}
