// import React, { useState } from 'react';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import Sidebar from './components/sidebar';

// export default function App() {
//     const [showLogin, setShowLogin] = useState(true);
//     const [username, setUsername] = useState('');

//     const handleLogin = (enteredUsername) => {
//         setUsername(enteredUsername);
//         setShowLogin(false);
//     };

//     return (
//         <div style={{

//             display: 'flex',
//             width: '100vw',
//             height: '100vh',
//             margin: 0,
//             padding: 0,
//             background: 'linear-gradient(120deg,#3a2bf0 0%,#46e6e8 100%)',
//             boxSizing: 'border-box',
//         }}>
//             <Sidebar />
//             <main style={{
//                 flex: 1,
//                 height: '100vh',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 background: 'transparent', // Let body handle background
//                 minWidth: 0,
//                 margin: 0,
//                 padding: 0,
//                 boxSizing: 'border-box'
//             }}>
//                 <div style={{
//                     width: '100%',
//                     maxWidth: '2060px',
//                     minHeight: '340px',
//                     alignItems: 'center',
//                 }}>
//                     {showLogin
//                         ? <Login onLogin={handleLogin} />
//                         : <Dashboard username={username} />}
//                 </div>
//             </main>
//         </div>
//     );
// }




// import React, { useState } from 'react';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import Sidebar from './components/sidebar';

// export default function App() {
//     const [showLogin, setShowLogin] = useState(true);
//     const [username, setUsername] = useState('');

//     const handleLogin = (enteredUsername) => {
//         setUsername(enteredUsername);
//         setShowLogin(false);
//     };

//     return (
//         <div
//             style={{
//                 display: 'flex',
//                 width: '100vw',
//                 height: '100vh',
//                 margin: 0,
//                 padding: 0,
//                 background: 'linear-gradient(120deg,#3a2bf0 0%,#46e6e8 100%)',
//                 boxSizing: 'border-box',
//             }}
//         >
//             {/* Only show sidebar after login */}
//             {!showLogin && <Sidebar />}
//             <main
//                 style={{
//                     flex: 1,
//                     height: '100vh',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     background: 'transparent',
//                     minWidth: 0,
//                     margin: 0,
//                     padding: 0,
//                     boxSizing: 'border-box',
//                     // Remove sidebar width on login
//                     marginLeft: showLogin ? 0 : '170px'
//                 }}
//             >
//                 <div
//                     style={{
//                         width: '100%',
//                         maxWidth: '2060px',
//                         minHeight: '340px',
//                         alignItems: 'center',
//                     }}
//                 >
//                     {showLogin ? (
//                         <Login onLogin={handleLogin} />
//                     ) : (
//                         <Dashboard username={username} />
//                     )}
//                 </div>
//             </main>
//         </div>
//     );
// }




// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import Register from './components/register';

// // Stubs for new pages
// function EncryptFiles() { return <div style={{ padding: 40 }}><h2>Encrypt Text & Files</h2><p>Upload text docs or files to encrypt.</p></div>; }
// function UploadMedia() { return <div style={{ padding: 40 }}><h2>Encrypt Images/Videos</h2><p>Upload images or videos to encrypt.</p></div>; }
// function DecryptFilesOrMedia() { return <div style={{ padding: 40 }}><h2>Decrypt Files / Media</h2><p>Decrypt your encrypted items here.</p></div>; }
// function ViewDecrypted() { return <div style={{ padding: 40 }}><h2>View Decrypted</h2><p>See what you've decrypted.</p></div>; }

// export default function App() {
//     const [showLogin, setShowLogin] = useState(true);
//     const [username, setUsername] = useState('');
//     const handleLogin = (enteredUsername) => {
//         setUsername(enteredUsername);
//         setShowLogin(false);
//     };
//     return (
//         <Router>
//             <div style={{ display: 'flex' }}>
//                 {/* Sidebar only after login (not on login or register page) */}
//                 <Routes>
//                     <Route path="/" element={showLogin ? null : <Sidebar />} />
//                     <Route path="/register" element={null} />
//                 </Routes>
//                 <main style={{ flex: 1 }}>
//                     <Routes>
//                         <Route path="/" element={showLogin ? <Login onLogin={handleLogin} /> : <Dashboard username={username} />} />
//                         <Route path="/register" element={<Register />} />
//                         <Route path="/encrypt-files" element={<EncryptFiles />} />
//                         <Route path="/upload-media" element={<UploadMedia />} />
//                         <Route path="/decrypt-files-or-media" element={<DecryptFilesOrMedia />} />
//                         <Route path="/view-decrypted" element={<ViewDecrypted />} />
//                     </Routes>
//                 </main>
//             </div>
//         </Router>
//     );
// }



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import Register from './components/register';
// import EncryptFiles1 from './components/EncryptFiles';
// import UploadMedia1 from './components/fileupload';
// import DecryptFiles from './components/DecryptFiles';
// import ViewEncrypted1 from './components/viewEncrypted';


// function EncryptFiles() { return <div style={{ padding: 40 }}><h1>Encrypt Text & Files</h1><h2>Upload text docs or files to encrypt.</h2></div>; }
// function UploadMedia() { return <div style={{ padding: 40 }}><h1>Encrypt Images/Videos</h1><h2>Upload images or videos to encrypt.</h2></div>; }
// function DecryptFilesOrMedia() { return <div style={{ padding: 40 }}><h1>Decrypt Files / Media</h1><h2>Decrypt your encrypted items here.</h2></div>; }
// //function ViewDecrypted() { return <div style={{ padding: 40 }}><h1>View Decrypted</h1><h2>See what you've decrypted.</h2></div>; }

// export default function App() {
//     const [showLogin, setShowLogin] = useState(true);
//     const [username, setUsername] = useState('');

//     const handleLogin = (enteredUsername) => {
//         setUsername(enteredUsername);
//         setShowLogin(false);
//     };

//     const handleLogout = () => {
//         setShowLogin(true);
//         setUsername('');
//     };

//     return (
//         <Router>
//             <div style={{ display: 'flex' }}>
//                 {/* Sidebar only visible when logged in (no login/register sidebar) */}
//                 {!showLogin && (
//                     <Sidebar onLogout={handleLogout} />
//                 )}
//                 <main style={{ flex: 1 }}>
//                     <Routes>
//                         <Route path="/" element={showLogin ? <Login onLogin={handleLogin} /> : <Dashboard username={username} />} />
//                         <Route path="/register" element={<Register />} />
//                         <Route path="/encrypt-files" element={<EncryptFiles1 />} />
//                         <Route path="/upload-media" element={<UploadMedia1 />} />
//                         <Route path="/decrypt-files-or-media" element={<DecryptFiles />} />
//                         <Route path="/view-Encrypted" element={<ViewEncrypted1 />} />
//                     </Routes>
//                 </main>
//             </div>
//         </Router>
//     );
// }


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/register';
import EncryptFiles1 from './components/EncryptFiles';
import UploadMedia1 from './components/fileupload';
import DecryptFiles from './components/DecryptFiles';
import ViewEncrypted1 from './components/viewEncrypted';



export default function App() {
    const [showLogin, setShowLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [userProfile, setUserProfile] = useState(null);

    const handleLogin = (enteredUsername, profileImage) => {
        setUsername(enteredUsername);
        setUserProfile(profileImage);
        setShowLogin(false);
    };

    const handleLogout = () => {
        setShowLogin(true);
        setUsername('');
        setUserProfile(null);
    };

    return (
        <Router>
            <div style={{ display: 'flex' }}>
                {!showLogin && (
                    <Sidebar onLogout={handleLogout} />
                )}
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={showLogin ? <Login onLogin={handleLogin} /> : <Dashboard username={username} profileImage={userProfile} />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/encrypt-files" element={<EncryptFiles1 username={username} />} />
                        <Route path="/upload-media" element={<UploadMedia1 username={username} />} />
                        <Route path="/decrypt-files-or-media" element={<DecryptFiles username={username} />} />
                        <Route path="/view-Encrypted" element={<ViewEncrypted1 username={username} />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}
