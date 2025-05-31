import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/packages', label: 'Packages' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/tour', label: 'Tour Details' },
];

const navVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, type: 'spring' } },
};

const Navbar = () => {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      style={{
        padding: '0 32px',
        minHeight: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(90deg, #ff9933 0%, #ffb347 100%)',
        boxShadow: '0 2px 12px rgba(255,153,51,0.08)',
        borderBottom: '2px solid #e17009',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{ fontWeight: 800, fontSize: 24, color: '#fff', letterSpacing: 1, fontFamily: 'serif' }}
      >
        Banaras
      </motion.div>
      <div style={{ display: 'flex', gap: 18 }}>
        {navLinks.map((link, idx) => (
          <motion.div
            key={link.to}
            whileHover={{ scale: 1.13, color: '#fffde4', background: '#e17009' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400 }}
            style={{
              borderRadius: 6,
              padding: '6px 14px',
              fontWeight: 600,
              fontSize: 16,
              color: '#fff',
              cursor: 'pointer',
              background: idx === 0 ? 'rgba(255,255,255,0.08)' : 'none',
              transition: 'background 0.2s',
            }}
          >
            <Link to={link.to} style={{ color: 'inherit', textDecoration: 'none' }}>{link.label}</Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
