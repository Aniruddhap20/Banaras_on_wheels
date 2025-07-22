import React, { useState } from 'react';
import packageImage from '../assets/package_image.png';
import styles from './Packages.module.css';

const packages = [
  {
    title: 'Startup',
    price: '₹15,000/200 USD',
    features: [
      '10 Pages',
      'Logo',
      'Slider',
      'Dynamic Website',
      'Domain-1st Year Free (.com or .in)',
      'Hosting Free For 1st Year',
      '2 Email — 500 MB Quota Each',
      '1 Contact Form',
      'Free SSL',
    ],
  },
  {
    title: 'Small Business',
    price: '₹25,000/300 USD',
    features: [
      '10 Pages',
      'Logo',
      'Slider',
      'Dynamic Website',
      'Domain-1st Year Free (.com or .in)',
      'Hosting Free For 1st Year',
      '2 Email — 500 MB Quota Each',
      '1 Contact Form',
      'Free SSL',
    ],
  },
  {
    title: 'eCommerce',
    price: '₹40,000/500 USD',
    features: [
      '10 Pages',
      'Logo',
      'Slider',
      'Dynamic Website',
      'Domain-1st Year Free (.com or .in)',
      'Hosting Free For 1st Year',
      '2 Email — 500 MB Quota Each',
      '1 Contact Form',
      'Free SSL',
    ],
  },
  {
    title: 'Premium',
    price: '₹60,000/800 USD',
    features: [
      '10 Pages',
      'Logo',
      'Slider',
      'Dynamic Website',
      'Domain-1st Year Free (.com or .in)',
      'Hosting Free For 1st Year',
      '2 Email — 500 MB Quota Each',
      '1 Contact Form',
      'Free SSL',
    ],
  },
  {
    title: 'Tourism',
    price: '₹20,000/250 USD',
    features: [
      '10 Pages',
      'Logo',
      'Slider',
      'Dynamic Website',
      'Domain-1st Year Free (.com or .in)',
      'Hosting Free For 1st Year',
      '2 Email — 500 MB Quota Each',
      '1 Contact Form',
      'Free SSL',
    ],
  },
  {
    title: 'Business Pro',
    price: '₹80,000/1000 USD',
    features: [
      '10 Pages',
      'Logo',
      'Slider',
      'Dynamic Website',
      'Domain-1st Year Free (.com or .in)',
      'Hosting Free For 1st Year',
      '2 Email — 500 MB Quota Each',
      '1 Contact Form',
      'Free SSL',
    ],
  },
];

const VISIBLE_CARDS = 3;

const floatingCircles = [
  { top: '10%', left: '5%', size: 120, delay: '0s', opacity: 0.15 },
  { top: '70%', left: '80%', size: 90, delay: '1s', opacity: 0.12 },
  { top: '50%', left: '50%', size: 150, delay: '2s', opacity: 0.10 },
  { top: '20%', left: '70%', size: 70, delay: '0.5s', opacity: 0.13 },
  { top: '80%', left: '10%', size: 100, delay: '1.5s', opacity: 0.11 },
  { top: '30%', left: '85%', size: 60, delay: '2.5s', opacity: 0.14 },
  { top: '60%', left: '30%', size: 80, delay: '0.8s', opacity: 0.12 },
  { top: '40%', left: '60%', size: 110, delay: '1.2s', opacity: 0.13 },
];

const circleAnim = `
@keyframes float {
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
  100% { transform: translateY(0) scale(1); }
}`;

export default function Packages() {
  const [startIdx, setStartIdx] = useState(0);
  const endIdx = startIdx + VISIBLE_CARDS;
  const maxStartIdx = Math.max(0, packages.length - VISIBLE_CARDS);

  const handleLeft = () => {
    setStartIdx(Math.max(0, startIdx - 1));
  };
  const handleRight = () => {
    setStartIdx(Math.min(maxStartIdx, startIdx + 1));
  };

  const canScrollLeft = startIdx > 0;
  const canScrollRight = endIdx < packages.length;

  return (
    <div className={styles.packagesContainer}>
      <style>{circleAnim}</style>
      {floatingCircles.map((circle, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: circle.top,
            left: circle.left,
            width: circle.size,
            height: circle.size,
            borderRadius: '50%',
            background: '#ff9800',
            opacity: circle.opacity,
            filter: 'blur(2px)',
            zIndex: 0,
            animation: `float 4s ease-in-out infinite`,
            animationDelay: circle.delay,
          }}
        />
      ))}
      <h1 className={styles.packagesTitle}>Tours Packages</h1>
      <div className={styles.carouselWrapper}>
        <button
          className={styles.carouselArrow}
          onClick={handleLeft}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          &#8592;
        </button>
        <div className={styles.cardsWrapper}>
          {packages.slice(startIdx, endIdx).map((pkg, idx) => {
            const globalIdx = startIdx + idx;
            const isCenterCard = idx === 1;
            return (
              <div className={styles.cardContainer} key={pkg.title}>
                <div
                  id={`pkg-card-${globalIdx}`}
                  className={`${styles.packageCard} ${isCenterCard ? styles.zoomedCard : ''}`}
                  onMouseMove={e => handleMouseMove(e, globalIdx, idx)}
                  onMouseLeave={() => handleMouseLeave(globalIdx, idx)}
                >
                  <div className={styles.cardOverlay} />
                  <div className={styles.cardContent}>
                    <div className={styles.cardTitle}>{pkg.title}</div>
                    <div className={styles.cardPrice}>{pkg.price}</div>
                    <ul className={styles.cardFeatures}>
                      {pkg.features.map((feature, idx2) => (
                        <li key={idx2} className={styles.cardFeatureItem}>
                          <span className={styles.cardTick}>✔</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={styles.cardButton}>Choose Plan</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className={styles.carouselArrow}
          onClick={handleRight}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

function handleMouseMove(e, globalIdx, idx) {
  const card = document.getElementById(`pkg-card-${globalIdx}`);
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const hoverScale = idx === 1 ? 1.14 : 1.05;
  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * 10;

  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(${hoverScale})`;
  card.style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)';
}

function handleMouseLeave(globalIdx, idx) {
  const card = document.getElementById(`pkg-card-${globalIdx}`);
  if (!card) return;
  card.style.transform = '';
  card.style.boxShadow = '';
}
