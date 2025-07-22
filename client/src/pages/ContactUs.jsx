import React from "react";
import contactImage from "../assets/contact_us.png";

const ContactUs = () => {
  return (
    <div style={{ fontFamily: 'Poppins, Arial, sans-serif', background: '#0a2342', minHeight: '100vh', color: '#fff' }}>
      {/* Hero/Banner Section */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '320px',
        backgroundImage: `url(${contactImage})`,
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
          <h1 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Contact Us</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: '#fff', fontSize: '1.1rem', fontWeight: 500 }}>
            <span style={{ color: '#fff', cursor: 'pointer', textDecoration: 'underline' }}>Home</span>
            <span style={{ color: '#ff9800', fontWeight: 700, margin: '0 4px' }}>»</span>
            <span style={{ color: '#ff9800', fontWeight: 700 }}>Contact</span>
          </div>
        </div>
      </div>

      {/* Top Section: Get In Touch */}
      <div style={{ background: '#0a2342', padding: '48px 0 32px 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: 0 }}>Get In Touch</h1>
        <p style={{ color: '#cfd8dc', fontSize: '1.15rem', margin: '18px auto 0 auto', maxWidth: 700 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut tempor ipsum dolor sit amet. labore
        </p>
      </div>

      {/* Centered Form + Contact Info */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', background: '#0a2342', padding: '0 0 32px 0' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 0,
          background: 'transparent',
          boxShadow: 'none',
        }}>
          {/* Form Card */}
          <div style={{
            background: '#fff',
            color: '#222',
            borderRadius: '12px 0 0 12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            padding: '38px 32px 32px 32px',
            minWidth: 420,
            maxWidth: 480,
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <span style={{ color: '#ff9800', fontWeight: 600, fontSize: '1.2rem' }}>Send US A Message</span>
              <span style={{ color: '#ff9800', fontSize: 28 }}>✉️</span>
            </div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ display: 'flex', gap: 18, marginBottom: 18 }}>
                <input type="text" placeholder="Name" style={inputStyle} />
                <input type="email" placeholder="Email Address" style={inputStyle} />
              </div>
              <div style={{ display: 'flex', gap: 18, marginBottom: 18 }}>
                <input type="text" placeholder="Phone Number" style={inputStyle} />
                <input type="text" placeholder="Address" style={inputStyle} />
              </div>
              <textarea placeholder="Message" rows={3} style={textAreaStyle} />
              <button type="submit" style={submitButtonStyle}>Submit</button>
            </form>
          </div>
          {/* Contact Info Card */}
          <div style={{
            background: '#ff9800',
            color: '#fff',
            borderRadius: '0 12px 12px 0',
            padding: '38px 32px 32px 32px',
            minWidth: 300,
            maxWidth: 340,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 12 }}>Contact Info</h3>
            <div style={infoRow}><span style={infoIcon}>🏠</span> Plaza X , XY Floor, Street, XYZ</div>
            <div style={infoRow}><span style={infoIcon}>✉️</span> Yourname@Email.Com</div>
            <div style={infoRow}><span style={infoIcon}>📞</span> +123-456-7890</div>
            <div style={{ display: 'flex', gap: 16, marginTop: 10 }}>
              <span style={socialIcon}><i className="fa fa-linkedin" /></span>
              <span style={socialIcon}><i className="fa fa-facebook" /></span>
              <span style={socialIcon}><i className="fa fa-twitter" /></span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer style={{
        background: '#0a2342',
        color: '#fff',
        padding: '48px 5% 0 5%',
        marginTop: 0,
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

const inputStyle = {
  flex: 1,
  padding: '12px 14px',
  border: 'none',
  borderBottom: '2px solid #ff9800',
  borderRadius: 0,
  fontSize: '1rem',
  outline: 'none',
  background: '#fff',
  color: '#222',
  marginBottom: 0,
};

const textAreaStyle = {
  width: '100%',
  padding: '12px 14px',
  border: 'none',
  borderBottom: '2px solid #ff9800',
  borderRadius: 0,
  fontSize: '1rem',
  outline: 'none',
  background: '#fff',
  color: '#222',
  resize: 'vertical',
  minHeight: 70,
  marginBottom: 18,
};

const submitButtonStyle = {
  marginTop: 18,
  padding: '14px 0',
  background: '#ff9800',
  color: '#fff',
  border: 'none',
  borderRadius: 32,
  fontWeight: 700,
  fontSize: '1.1rem',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(255,152,0,0.10)',
  transition: 'background 0.2s',
  width: '100%',
};

const infoRow = {
  fontSize: '1.05rem',
  marginBottom: 6,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
};

const infoIcon = {
  fontSize: '1.2rem',
  marginRight: 6,
};

const socialIcon = {
  background: '#fff',
  color: '#ff9800',
  borderRadius: '50%',
  width: 32,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  fontSize: '1.1rem',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
};

export default ContactUs;
