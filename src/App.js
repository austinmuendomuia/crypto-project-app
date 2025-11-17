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
// import DemoExplanationPage from './components/DemoPage';




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
