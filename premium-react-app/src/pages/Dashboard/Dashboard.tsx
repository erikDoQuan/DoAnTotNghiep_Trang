import React from 'react';
import { Search, Calendar, SlidersHorizontal, ChevronRight, User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import './Dashboard.css';
import avatarTrang from '@/assets/avatar-trang.png';
import avatarQuan from '@/assets/avatar-quan.png';

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
        sender: "Nguyễn Minh Quân",
        time: "05/02/2026\n09:59:43"
    }
];

const Dashboard: React.FC = () => {
    const [currentView, setCurrentView] = React.useState<'announcements' | 'orders' | 'profile'>('announcements');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedStatus, setSelectedStatus] = React.useState('All');
    const userRole = localStorage.getItem('userRole') || 'user';
    const avatar = userRole === 'admin' ? avatarQuan : avatarTrang;

    React.useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#orders') {
                setCurrentView('orders');
            } else if (hash === '#activity') {
                setCurrentView('announcements');
            } else if (hash === '#profile') {
                setCurrentView('profile');
            }
            // Reset filters on view change
            setSearchTerm('');
            setSelectedStatus('All');
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Check initial hash

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const ordersData = [
        { id: 'ORD-7905032026', customer: 'Công Ty A', sender: 'Hồ Nhật Đoan Trang', status: 'Chứng từ đang xử lí', time: '03/03/2026', color: '#ffb300' },
        { id: 'ORD-7910012026', customer: 'Công Ty B', sender: 'Hồ Nhật Đoan Trang', status: 'Hoàn tất', time: '05/02/2026', color: '#17a2b8' },
        { id: 'ORD-7912032026', customer: 'Công Ty C', sender: 'Hồ Nhật Đoan Trang', status: 'Chứng từ đang xử lí', time: '04/03/2026', color: '#ffb300' },
        { id: 'ORD-7915052026', customer: 'Công Ty D', sender: 'Hồ Nhật Đoan Trang', status: 'Chứng từ chưa hợp lệ', time: '10/03/2026', color: '#dc3545' },
        { id: 'ORD-7918092026', customer: 'Công Ty E', sender: 'Đặng Thu Thảo', status: 'Hoàn tất', time: '12/03/2026', color: '#17a2b8' },
        { id: 'ORD-7920102026', customer: 'Công Ty F', sender: 'Võ Thành Long', status: 'Chứng từ đang xử lí', time: '15/03/2026', color: '#ffb300' },
        { id: 'ORD-7922112026', customer: 'Công Ty G', sender: 'Bùi Gia Bảo', status: 'Hoàn tất', time: '18/03/2026', color: '#17a2b8' },
        { id: 'ORD-7925122026', customer: 'Công Ty H', sender: 'Ngô Mỹ Linh', status: 'Chứng từ chưa hợp lệ', time: '20/03/2026', color: '#dc3545' },
        { id: 'ORD-7930152026', customer: 'Công Ty I', sender: 'Đỗ Hữu Phước', status: 'Hoàn tất', time: '22/03/2026', color: '#17a2b8' },
        { id: 'ORD-7935182026', customer: 'Công Ty J', sender: 'Hoàng Kim Ngân', status: 'Chứng từ đang xử lí', time: '25/03/2026', color: '#ffb300' },
    ];

    const filteredData = ordersData.filter(item => {
        const matchesSearch = item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.customer.toLowerCase().includes(searchTerm.toLowerCase());
        if (selectedStatus === 'All') return matchesSearch;

        let matchesStatus = false;
        if (selectedStatus === 'Chứng từ hợp lệ') {
            matchesStatus = item.status === 'Chứng từ hợp lệ';
        } else if (selectedStatus === 'Chứng từ chưa hợp lệ') {
            matchesStatus = item.status === 'Chưa hợp lệ' || item.status === 'Chứng từ chưa hợp lệ';
        } else if (selectedStatus === 'Chứng từ đang xử lí') {
            matchesStatus = item.status.includes('xử lí') || item.status === 'Đang xử lí' || item.status === 'Đang kiểm tra';
        } else if (selectedStatus === 'Hoàn tất') {
            matchesStatus = item.status === 'Hoàn tất';
        }

        return matchesSearch && matchesStatus;
    });

    const statusFilters = [
        { label: 'All', count: ordersData.length, color: '#666' },
        { label: 'Chứng từ hợp lệ', count: ordersData.filter(d => d.status === 'Chứng từ hợp lệ').length, color: '#28a745' },
        { label: 'Chứng từ chưa hợp lệ', count: ordersData.filter(d => d.status === 'Chưa hợp lệ' || d.status === 'Chứng từ chưa hợp lệ').length, color: '#dc3545' },
        { label: 'Chứng từ đang xử lí', count: ordersData.filter(d => d.status.includes('xử lí') || d.status === 'Đang xử lí' || d.status === 'Đang kiểm tra').length, color: '#ffb300' },
        { label: 'Hoàn tất', count: ordersData.filter(d => d.status === 'Hoàn tất').length, color: '#17a2b8' }
    ];

    if (currentView === 'profile') {
        return (
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <div className="header-title-wrapper">
                        <h2 className="header-title">THÔNG TIN CÁ NHÂN</h2>
                    </div>
                </div>

                <div className="profile-content-scrollable">
                    <div className="profile-container">
                        <div className="profile-main-card">
                            <div className="profile-sidebar-card">
                                <div className="profile-avatar-wrapper">
                                    <img src={avatar} alt="Profile Avatar" className="profile-avatar-img" />
                                    <div className="profile-status-online"></div>
                                </div>
                                <h2 className="profile-name-title">{userRole === 'admin' ? 'Nguyễn Minh Quân' : 'Hồ Nhật Đoan Trang'}</h2>
                                <p className="profile-role-tag">{userRole === 'admin' ? 'Quản trị viên Hệ thống - IT Expert' : 'Doc - Logistics Expert'}</p>
                                <div className="profile-stats-mini">
                                    <div className="mini-stat">
                                        <span className="stat-val">150+</span>
                                        <span className="stat-lbl">Đơn hàng</span>
                                    </div>
                                    <div className="mini-stat">
                                        <span className="stat-val">98%</span>
                                        <span className="stat-lbl">Hợp lệ</span>
                                    </div>
                                </div>
                            </div>

                            <div className="profile-details-grid">
                                <div className="info-section">
                                    <h3 className="section-title"><User size={18} /> Thông tin cơ bản</h3>
                                    <div className="info-row">
                                        <span className="info-label">Họ và tên:</span>
                                        <span className="info-value">{userRole === 'admin' ? 'Đỗ Cao Minh Quân' : 'Hồ Nhật Đoan Trang'}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Tuổi:</span>
                                        <span className="info-value">{userRole === 'admin' ? '28' : '22'}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Chức vụ:</span>
                                        <span className="info-value">{userRole === 'admin' ? 'Quản trị viên' : 'Doc'}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Phòng ban:</span>
                                        <span className="info-value">Kinh doanh Quốc tế</span>
                                    </div>
                                </div>

                                <div className="info-section">
                                    <h3 className="section-title"><Mail size={18} /> Liên hệ</h3>
                                    <div className="info-row">
                                        <span className="info-label">Email:</span>
                                        <span className="info-value">{userRole === 'admin' ? 'quan.do@interlink.com' : 'trang.hnd@asl-globallogistics.com'}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Số điện thoại:</span>
                                        <span className="info-value">{userRole === 'admin' ? '0337782571' : '+84 9xx xxx xxx'}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Địa chỉ:</span>
                                        <span className="info-value">TP. Hồ Chí Minh, Việt Nam</span>
                                    </div>
                                </div>

                                <div className="info-section full-width">
                                    <h3 className="section-title"><Award size={18} /> Kỹ năng & Chuyên môn</h3>
                                    <div className="skills-tags">
                                        <span className="skill-pill">{userRole === 'admin' ? 'System Administration' : 'Logistics Management'}</span>
                                        <span className="skill-pill">{userRole === 'admin' ? 'Database Management' : 'International Trading'}</span>
                                        <span className="skill-pill">{userRole === 'admin' ? 'Network Security' : 'Documentation'}</span>
                                        <span className="skill-pill">{userRole === 'admin' ? 'IT Support' : 'Phytosanitary Expert'}</span>
                                        <span className="skill-pill">Customer Relations</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="dashboard-footer">
                    <p>© 2025 ASL Global Logistics. All rights reserved.</p>
                </footer>
            </div>
        );
    }

    if (currentView === 'orders') {
        return (
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <div className="header-title-wrapper">
                        <h2 className="header-title">ĐƠN HÀNG</h2>
                    </div>
                </div>

                <div className="orders-filter-section">
                    <div className="search-date-grid">
                        <div className="search-input-group">
                            <input
                                type="text"
                                placeholder="Search by ID, name, code..."
                                className="orders-search-input"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="date-input-group">
                            <div className="date-field">
                                <input type="text" placeholder="dd/mm/yyyy" className="date-input" />
                                <Calendar size={16} className="date-icon" />
                            </div>
                            <span className="date-separator">→</span>
                            <div className="date-field">
                                <input type="text" placeholder="dd/mm/yyyy" className="date-input" />
                                <Calendar size={16} className="date-icon" />
                            </div>
                        </div>
                        <button className="btn-search-orders">Tìm kiếm</button>
                    </div>

                    <div className="status-filters-row">
                        {statusFilters.map((filter, index) => (
                            <button
                                key={index}
                                className={`status-pill ${selectedStatus === filter.label ? 'active' : ''}`}
                                onClick={() => setSelectedStatus(filter.label)}
                            >
                                <span className="status-label">{filter.label}</span>
                                <span className="status-count" style={{ backgroundColor: filter.color }}>
                                    {filter.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="orders-table-container">
                    <table className="orders-table">
                        <thead>
                            <tr>
                                <th style={{ width: '40px' }}><input type="checkbox" /></th>
                                <th>Đơn hàng</th>
                                <th>Khách hàng</th>
                                <th>Tình trạng</th>
                                <th>Người gửi</th>
                                <th>Thời gian</th>
                                <th style={{ width: '80px', textAlign: 'center' }}>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((order, index) => (
                                    <tr key={index}>
                                        <td><input type="checkbox" /></td>
                                        <td className="order-id-cell">{order.id}</td>
                                        <td>{order.customer}</td>
                                        <td style={{ color: order.color, fontWeight: 600 }}>{order.status}</td>
                                        <td>{order.sender}</td>
                                        <td>{order.time}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <button className="view-btn">View</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} style={{ textAlign: 'center', padding: '40px', color: '#888' }}>
                                        Không tìm thấy đơn hàng nào
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <footer className="dashboard-footer">
                    <p>© 2025 ASL Global Logistics. All rights reserved.</p>
                </footer>

                <button className="fab">
                    <SlidersHorizontal size={24} />
                </button>
            </div>
        );
    }

    // Default: Announcements View
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
