import React from 'react';
import heroImg from '../assets/contact_us.png'; // Placeholder, replace with About Us image if available

const AboutUs = () => {
  return (
    <div style={{ fontFamily: 'Poppins, Arial, sans-serif', background: '#f7f7f7', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '320px',
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(10,35,66,0.45)',
          zIndex: 1,
        }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>About Us</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: '#fff', fontSize: '1.1rem', fontWeight: 500 }}>
            <span style={{ color: '#fff', cursor: 'pointer', textDecoration: 'underline' }}>Home</span>
            <span style={{ color: '#ff9800', fontWeight: 700, margin: '0 4px' }}>»</span>
            <span style={{ color: '#ff9800', fontWeight: 700 }}>About</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '40px',
        padding: '32px 8% 24px 8%',
        background: '#f7f7f7',
        marginTop: '0px',
      }}>
        <div style={{ flex: 1.5, minWidth: 320 }}>
          <div style={{ color: '#ff9800', fontWeight: 600, fontSize: '1.1rem', marginBottom: 8 }}>About Us</div>
          <h2 style={{ fontWeight: 700, fontSize: '2.7rem', margin: '0 0 18px 0', color: '#222', lineHeight: 1.15 }}>
            With Us, You Are Always In<br />For A Pleasant Surprise
          </h2>
          <p style={{ color: '#7b8a99', fontSize: '1.15rem', marginBottom: 18 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p style={{ color: '#7b8a99', fontSize: '1.15rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: 260, display: 'flex', justifyContent: 'center' }}>
          <img src={heroImg} alt="About Us" style={{ width: '100%', maxWidth: 340, borderRadius: 18, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }} />
        </div>
      </div>

      {/* Footer Section */}
      <footer style={{
        background: '#0a2342',
        color: '#fff',
        padding: '48px 5% 0 5%',
        marginTop: 60,
        borderTop: '2px solid #112e4d',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 32,
          marginBottom: 24,
          flexWrap: 'wrap',
        }}>
          <div style={{ flex: 1, minWidth: 200, marginBottom: 24 }}>
            <h4 style={{ color: '#ff9800', fontWeight: 700, fontSize: '1.1rem', marginBottom: 12 }}>Quick Links</h4>
            <div style={{ color: '#fff', marginBottom: 8, cursor: 'pointer', fontWeight: 500, fontSize: '1rem' }}>Home</div>
            <div style={{ color: '#fff', marginBottom: 8, cursor: 'pointer', fontWeight: 500, fontSize: '1rem' }}>About</div>
            <div style={{ color: '#fff', marginBottom: 8, cursor: 'pointer', fontWeight: 500, fontSize: '1rem' }}>Destination</div>
            <div style={{ color: '#fff', marginBottom: 8, cursor: 'pointer', fontWeight: 500, fontSize: '1rem' }}>Contact</div>
          </div>
          <div style={{ flex: 1, minWidth: 200, marginBottom: 24 }}>
            <h4 style={{ color: '#ff9800', fontWeight: 700, fontSize: '1.1rem', marginBottom: 12 }}>Contact Info</h4>
            <div style={{ color: '#fff', marginBottom: 8, fontSize: '1rem' }}>Plaza X , XY Floor, Street, XYZ</div>
            <div style={{ color: '#fff', marginBottom: 8, fontSize: '1rem' }}>Yourname@Email.Com</div>
            <div style={{ color: '#fff', marginBottom: 8, fontSize: '1rem' }}>+123-456-7890</div>
          </div>
          <div style={{ flex: 1, minWidth: 200, marginBottom: 24 }}>
            <h4 style={{ color: '#ff9800', fontWeight: 700, fontSize: '1.1rem', marginBottom: 12 }}>Make A Reservation</h4>
            <div style={{ color: '#cfd8dc', fontSize: '1rem', marginBottom: 12 }}>Our Support & Sales team is available 24/7 to answer your queries</div>
            <button style={{
              background: '#0a2342',
              color: '#fff',
              border: '2px solid #fff',
              borderRadius: 24,
              padding: '10px 28px',
              fontWeight: 700,
              fontSize: '1.1rem',
              cursor: 'pointer',
              marginTop: 8,
              boxShadow: '0 2px 8px rgba(255,152,0,0.10)',
              transition: 'background 0.2s',
            }}>Book Now</button>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid #112e4d',
          padding: '18px 0 8px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          fontSize: '1rem',
        }}>
          <span style={{ fontWeight: 700, fontSize: '1.3rem', color: '#fff', letterSpacing: 1 }}>Adventurist</span>
          <span style={{ color: '#cfd8dc', fontSize: '0.98rem', marginLeft: 12 }}>
            Copyright © 2023 Adventurist By Evonicmedia. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
