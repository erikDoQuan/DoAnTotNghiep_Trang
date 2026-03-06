import React from 'react';
import { User, Bell, Package, RefreshCw, ChevronRight } from 'lucide-react';
import './Sidebar.css';
import logo from '@/assets/interlink-logo.svg';
import avatar from '@/assets/avatar-trang.png';

const Sidebar: React.FC = () => {
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
                <div className="sale-air">Sale Air</div>
                <div className="user-name">Hồ Nhật Đoan Trang</div>
            </div>

            <nav className="nav-section">
                <div className="nav-header">Trang cá nhân</div>
                <a href="#profile" className="nav-item">
                    <User className="nav-icon" />
                    <span>Thông tin cá nhân</span>
                </a>
                <a href="#activity" className="nav-item">
                    <Bell className="nav-icon" />
                    <span>Trang của bạn</span>
                </a>

                <div className="nav-header">Tra cứu thông tin</div>
                <a href="#orders" className="nav-item active">
                    <Package className="nav-icon" />
                    <span>Đơn hàng</span>
                </a>
                <a href="#pricing" className="nav-item">
                    <RefreshCw className="nav-icon" />
                    <span>Cập nhật giá</span>
                </a>
            </nav>

        </aside>
    );
};

export default Sidebar;
