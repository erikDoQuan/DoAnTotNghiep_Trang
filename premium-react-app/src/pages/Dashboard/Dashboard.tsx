import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import './Dashboard.css';

const announcements = [
    {
        id: 1,
        title: "Thông báo về bộ chứng từ của ORD-7905032026 đang xử lí",
        sender: "Trần Thanh Tâm",
        time: "03/03/2026\n09:54:02"
    },
    {
        id: 2,
        title: "Thông báo về giá tuyến Shanghai của VNA",
        sender: "Lê Hoài Nam",
        time: "24/02/2026\n09:08:10"
    },
    {
        id: 3,
        title: "Thông báo về bộ chứng từ ORD-7910012026 đã hoàn tất",
        sender: "Đỗ Cao Minh Quân",
        time: "05/02/2026\n09:59:43"
    }
];

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="header-title-wrapper">
                    <h2 className="header-title">THÔNG BÁO</h2>
                </div>
            </div>

            <div className="tabs-container">
                <button className="tab active">Thông báo chung</button>
                <button className="tab">Thông báo cá nhân</button>
            </div>

            <div className="announcement-card">
                <div className="search-bar-wrapper">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Tìm kiếm thông báo"
                        className="search-input"
                    />
                </div>

                <table className="announcement-table">
                    <thead>
                        <tr>
                            <th style={{ width: '60%' }}>Tiêu đề</th>
                            <th style={{ width: '25%' }}>Người gửi</th>
                            <th style={{ width: '15%' }}>Thời gian gửi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {announcements.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <div className="announcement-title">{item.title}</div>
                                </td>
                                <td>
                                    <div className="sender-info">{item.sender}</div>
                                </td>
                                <td>
                                    <div className="time-info" style={{ whiteSpace: 'pre-line' }}>{item.time}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button className="fab">
                <SlidersHorizontal size={24} />
            </button>
        </div>
    );
};

export default Dashboard;
