import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, LogOut, ChevronDown } from 'lucide-react';
import './Topbar.css';
import avatarTrang from '@/assets/avatar-trang.png';
import avatarQuan from '@/assets/avatar-quan.png';

const Topbar: React.FC = () => {
    const [isLogoutOpen, setIsLogoutOpen] = React.useState(false);
    const navigate = useNavigate();
    const userRole = localStorage.getItem('userRole') || 'user';
    const avatar = userRole === 'admin' ? avatarQuan : avatarTrang;

    React.useEffect(() => {
        const handleClickOutside = () => setIsLogoutOpen(false);
        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
    }, []);

    const toggleLogout = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsLogoutOpen(!isLogoutOpen);
    };

    const handleLogout = () => {
        console.log('Logging out...');
        navigate('/');
    };

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
                
                <div className="topbar-user-profile" onClick={toggleLogout}>
                    <img
                        src={avatar}
                        alt="Small User Avatar"
                        className="user-avatar-small"
                    />
                    <ChevronDown size={14} className={`dropdown-arrow ${isLogoutOpen ? 'open' : ''}`} />
                    
                    {isLogoutOpen && (
                        <div className="topbar-logout-dropdown" onClick={(e) => e.stopPropagation()}>
                            <div className="dropdown-user-header">
                                <img src={avatar} alt="Avatar" className="header-small-avatar" />
                                <div className="user-meta">
                                    <span className="u-name-top">{userRole === 'admin' ? 'Nguyễn Minh Quân' : 'Đoan Trang'}</span>
                                    <span className="u-role-top">{userRole === 'admin' ? 'Quản trị viên' : 'Doc'}</span>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item logout-btn" onClick={handleLogout}>
                                <LogOut size={16} />
                                <span>Đăng xuất</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Topbar;
