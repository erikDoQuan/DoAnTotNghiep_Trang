import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginModal } from '../LoginModal/LoginModal';
import './Navbar.css';

export const Navbar: React.FC = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo-link">
                        <img src="/src/assets/interlink-logo.svg" alt="Interlink" className="navbar-logo-img" />
                    </Link>

                    {/* Navbar links removed as requested */}

                    <div className="navbar-actions">
                        <div className="lang-switcher">
                            <span className="flag">🇻🇳</span> Tiếng Việt
                        </div>
                        <button className="btn-login" onClick={() => setIsLoginModalOpen(true)}>Đăng nhập</button>
                        <button className="btn-register">Đăng ký</button>
                    </div>
                </div>
            </nav>
            <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
        </>
    );
};
