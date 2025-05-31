import React from 'react';
import { motion } from 'framer-motion';

const tourData = [
  {
    title: 'Varanasi Spiritual Journey',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    stars: 5,
    desc: 'Explore more n` tours',
  },
  {
    title: 'Ganges Boat Tour',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    stars: 5,
    desc: 'Explore natural trasics devnic tours',
  },
  {
    title: 'Heritage Walk of Banaras',
    img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80',
    stars: 5,
    desc: 'Explore story day-on exploring tours',
  },
  {
    title: 'Sarnath Excursion',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    stars: 5,
    desc: 'Explore anir Siv wise cantal ittenary',
  },
];

const featureData = [
  { icon: '🌏', label: 'Authentic Exper' },
  { icon: '👨‍💼', label: 'Expert Guides' },
  { icon: '🚌', label: 'Comfortable Transport' },
];

// Animation variants
const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};
const cardItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } },
};
const testimonialVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};
const featureVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.18, type: 'spring', stiffness: 300 },
  }),
};

// Animated saffron waves background
const SaffronWaves = () => (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
    <motion.div
      initial={{ y: -60 }}
      animate={{ y: [0, 30, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 220,
        background: 'radial-gradient(circle at 60% 40%, #ffb347 0%, #ff9933 80%, transparent 100%)',
        opacity: 0.25,
        filter: 'blur(8px)',
      }}
    />
    <motion.div
      initial={{ y: 60 }}
      animate={{ y: [0, -30, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 180,
        background: 'radial-gradient(circle at 30% 80%, #ffb347 0%, #ff9933 80%, transparent 100%)',
        opacity: 0.18,
        filter: 'blur(12px)',
      }}
    />
    {/* Floating saffron circles */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: 0, x: 0, opacity: 0.18 + 0.1 * (i % 2) }}
        animate={{
          y: [0, 30 + 10 * i, 0],
          x: [0, 40 - 10 * i, 0],
        }}
        transition={{ duration: 7 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
        style={{
          position: 'absolute',
          top: `${10 + i * 12}%`,
          left: `${5 + i * 15}%`,
          width: 60 + i * 10,
          height: 60 + i * 10,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ffb347 0%, #ff9933 100%)',
          opacity: 0.13 + 0.07 * (i % 2),
          filter: 'blur(2px)',
        }}
      />
    ))}
  </div>
);

const Home = () => {
  return (
    <div style={{ fontFamily: 'serif', background: 'linear-gradient(120deg, #fffbe6 0%, #fff3e0 100%)', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <SaffronWaves />
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        style={{
          background: 'linear-gradient(120deg, #ffb347 0%, #ff9933 100%)',
          color: '#fff',
          padding: '70px 0 60px 0',
          textAlign: 'center',
          borderBottomLeftRadius: 60,
          borderBottomRightRadius: 60,
          boxShadow: '0 8px 32px rgba(255,153,51,0.10)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <motion.h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: 10 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          Banaras on Wheels
        </motion.h1>
        <motion.p
          style={{ fontSize: '1.3rem', marginBottom: 30 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Curated Travel Packages, Tours and Local Experiences<br />in Varanasi
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.08, backgroundColor: '#e17009' }}
          whileTap={{ scale: 0.97 }}
          style={{ background: '#e17009', color: '#fff', border: 'none', padding: '14px 36px', borderRadius: 7, fontSize: '1.1rem', cursor: 'pointer', fontWeight: 600, boxShadow: '0 2px 12px rgba(255,153,51,0.13)' }}
        >
          EXPLORE TOURS
        </motion.button>
      </motion.div>

      {/* Popular Tours */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 16px 0 16px', position: 'relative', zIndex: 2 }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: 30, color: '#e17009', letterSpacing: 1 }}>Popular Tours</h2>
        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
            justifyItems: 'center',
          }}
        >
          {tourData.map((tour, idx) => (
            <motion.div
              key={idx}
              variants={cardItem}
              whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(255,153,51,0.13)' }}
              style={{
                background: 'linear-gradient(120deg, #fffbe6 0%, #fff3e0 100%)',
                borderRadius: 18,
                boxShadow: '0 2px 12px rgba(255,153,51,0.07)',
                padding: 0,
                maxWidth: 270,
                width: '100%',
                overflow: 'hidden',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 320,
                cursor: 'pointer',
                border: '1.5px solid #ffb347',
              }}
            >
              <img src={tour.img} alt={tour.title} style={{ width: '100%', height: 120, objectFit: 'cover', borderTopLeftRadius: 18, borderTopRightRadius: 18 }} />
              <div style={{ padding: '18px 16px 12px 16px', flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 6, color: '#e17009' }}>{tour.title}</div>
                <div style={{ color: '#d3542f', marginBottom: 6 }}>{'★'.repeat(tour.stars)}</div>
                <div style={{ color: '#444', fontSize: '0.98rem' }}>{tour.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Testimonials */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={testimonialVariants}
        style={{ maxWidth: 900, margin: '40px auto 0 auto', padding: '0 16px', position: 'relative', zIndex: 2 }}
      >
        <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: 18, color: '#e17009' }}>Testimonials</h2>
        <blockquote style={{ fontStyle: 'italic', background: 'linear-gradient(120deg, #fffbe6 0%, #fff3e0 100%)', borderRadius: 14, padding: '22px 28px', boxShadow: '0 2px 8px rgba(255,153,51,0.04)', textAlign: 'center', margin: 0, border: '1.5px solid #ffb347', color: '#b84a24' }}>
          <span style={{ fontWeight: 600 }}>
            "An unforgettable experience."
          </span> The four was well-organized and our guide was extremely knowledgeable.
        </blockquote>
      </motion.div>

      {/* Features Row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 40,
          margin: '40px 0 0 0',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {featureData.map((f, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={featureVariants}
            style={{ textAlign: 'center', minWidth: 120, background: 'rgba(255,179,71,0.13)', borderRadius: 12, padding: '18px 10px', boxShadow: '0 2px 8px rgba(255,153,51,0.07)', border: '1.5px solid #ffb347' }}
          >
            <div style={{ fontSize: 38, marginBottom: 8, color: '#e17009' }}>{f.icon}</div>
            <div style={{ fontSize: 16, color: '#b84a24' }}>{f.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(90deg, #ff9933 0%, #ffb347 100%)',
        color: '#fff',
        marginTop: 50,
        padding: '22px 0 10px 0',
        textAlign: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        boxShadow: '0 -2px 12px rgba(255,153,51,0.08)',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1, marginBottom: 6 }}>Banaras</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 30, flexWrap: 'wrap', fontSize: 15 }}>
          <span>Quick Links</span>
          <span>Contact info</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
