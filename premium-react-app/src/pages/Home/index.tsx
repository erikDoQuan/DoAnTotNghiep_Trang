import { Navbar } from '@/components/Navbar/Navbar';
import portImg from '@/assets/hero-port.png';
import './Home.css';

const Home = () => {
    return (
        <div className="home-wrapper">
            <Navbar />

            <section className="hero-section">
                <div className="hero-image-container">
                    <img src={portImg} alt="Interlink Port" className="hero-bg-image" />
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-floating-contact">
                    <div className="phone-icon">📞</div>
                    <span>0937 48 18 98</span>
                </div>

                <div className="hero-nav-dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </section>

            <section className="intro-section">
                <div className="container">
                    <h2>PARTNERSHIP TO SUCCESS</h2>
                    <p>Interlink cung cấp các giải pháp vận tải toàn cầu tối ưu cho doanh nghiệp.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
