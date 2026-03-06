import React from 'react';
import { Bell } from 'lucide-react';
import './Topbar.css';
import avatar from '@/assets/avatar-trang.png';

const Topbar: React.FC = () => {
    return (
        <header className="topbar">
            <div className="topbar-left">
                <h1 className="university-name">INTERLINK - Partnership to success</h1>
            </div>
            <div className="topbar-right">
                <div className="topbar-icon-btn">
                    <img
                        src="https://flagcdn.com/vn.svg"
                        alt="Vietnam Flag"
                        className="flag-icon"
                    />
                </div>
                <button className="topbar-icon-btn">
                    <Bell size={20} />
                    <span className="badge">2</span>
                </button>
                <img
                    src={avatar}
                    alt="Small User Avatar"
                    className="user-avatar-small"
                />
            </div>
        </header>
    );
};

export default Topbar;
