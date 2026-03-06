import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginModal.css';
import loginBg from '@/assets/login-bg.png';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [branch, setBranch] = useState('HCM');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (email === '0383142877' && password === 'Trang@123') {
            console.log('Đăng nhập thành công!');
            onClose();
            navigate('/dashboard');
        } else {
            setError('Sai mật khẩu hoặc tài khoản. Vui lòng thử lại.');
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>

                <div className="modal-split">
                    <div className="modal-image-panel">
                        <img src={loginBg} alt="Logistics Background" className="modal-bg-img" />
                        <div className="modal-image-overlay">
                            <h2>INTERLINK</h2>
                            <p>PARTNERSHIP TO SUCCESS</p>
                        </div>
                    </div>

                    <div className="modal-form-panel">
                        <h2>Đăng Nhập</h2>
                        <p className="modal-subtitle">Chào mừng bạn trở lại hệ thống</p>

                        <form className="login-form" onSubmit={handleLogin}>
                            <div className="input-group">
                                <label>Email / Phone</label>
                                <input
                                    type="text"
                                    placeholder="Nhập email hoặc số điện thoại"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <label>Mật khẩu</label>
                                <input
                                    type="password"
                                    placeholder="Nhập mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="input-group">
                                <label>Chi nhánh</label>
                                <select
                                    value={branch}
                                    onChange={(e) => setBranch(e.target.value)}
                                    className="branch-select"
                                >
                                    <option value="HCM">TP. Hồ Chí Minh (Trụ sở chính)</option>
                                    <option value="HN">Hà Nội</option>
                                    <option value="DN">Đà Nẵng</option>
                                    <option value="HP">Hải Phòng</option>
                                </select>
                            </div>

                            {error && <div className="error-message">{error}</div>}

                            <div className="form-actions">
                                <label className="remember-me">
                                    <input type="checkbox" /> Ghi nhớ đăng nhập
                                </label>
                                <a href="#" className="forgot-password">Quên mật khẩu?</a>
                            </div>

                            <button type="submit" className="btn-submit-login">ĐĂNG NHẬP</button>
                        </form>

                        <div className="modal-footer">
                            Chưa có tài khoản? <a href="#">Đăng ký ngay</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
