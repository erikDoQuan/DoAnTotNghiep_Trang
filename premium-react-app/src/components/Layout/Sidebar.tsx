import React from 'react';
import { User, Bell, Package, RefreshCw, ClipboardList, ChevronRight, SlidersHorizontal } from 'lucide-react';
import './Sidebar.css';
import logo from '@/assets/interlink-logo.svg';
import avatarTrang from '@/assets/avatar-trang.png';
import avatarQuan from '@/assets/avatar-quan.png';

const Sidebar: React.FC = () => {
    const [activeItem, setActiveItem] = React.useState('activity');
    const userRole = localStorage.getItem('userRole') || 'user';
    const avatar = userRole === 'admin' ? avatarQuan : avatarTrang;

    React.useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash || '#activity';
            setActiveItem(hash.replace('#', ''));
        };
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <aside className="sidebar">
            <div className="logo-container">
                <img src={logo} alt="Interlink Logo" className="logo" />
            </div>

            <div className="user-section">
                <div className="avatar-container">
                    <img
                        src={avatar}
                        alt="User Avatar"
                        className="avatar"
                    />
                </div>
                <div className="sale-air">{userRole === 'admin' ? 'Doc' : 'Doc'}</div>
                <div className="user-name">{userRole === 'admin' ? 'Nguyễn Minh Quân' : 'Hồ Nhật Đoan Trang'}</div>
            </div>

            <nav className="nav-section">
                <div className="nav-header">Trang cá nhân</div>
                <a href="#profile" className={`nav-item ${activeItem === 'profile' ? 'active' : ''}`}>
                    <User className="nav-icon" />
                    <span>Thông tin cá nhân</span>
                </a>
                <a href="#activity" className={`nav-item ${activeItem === 'activity' ? 'active' : ''}`}>
                    <Bell className="nav-icon" />
                    <span>Trang của bạn</span>
                </a>

                <div className="nav-header">Nghiệp vụ</div>
                <a href="#orders" className={`nav-item ${activeItem === 'orders' ? 'active' : ''}`}>
                    <Package className="nav-icon" />
                    <span>Đơn hàng</span>
                </a>
                <a href="#settings" className={`nav-item ${activeItem === 'settings' ? 'active' : ''}`}>
                    <SlidersHorizontal className="nav-icon" />
                    <span>Cài đặt</span>
                </a>
            </nav>

        </aside>
    );
};

export default Sidebar;
