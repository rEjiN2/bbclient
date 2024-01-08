'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Image1 from '../../../../public/img_header.png';
import { Container } from '@mui/material';

const Banner = ({ isRtl }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rtlContainerStyles = {
    flexDirection: isRtl ? 'row-reverse' : 'row',
  };

  const rtlStyles = {
    textAlign: 'right',
    direction: 'rtl',
  };

  const mobileStyles = {
    bannerContainer: {
      flexDirection: isRtl ? 'column-reverse' : 'column',
      textAlign: isRtl ? 'right' : 'left',
    },
    rightColumn: {
      alignItems: isRtl ? 'flex-start' : 'center',
    },
    leftColumnH3: {
      fontWeight: 'normal',
      fontSize: '20px',
      ...(isRtl ? rtlStyles : {}),
    },
  };

  const desktopStyles = {
    leftColumnH3: {
      fontWeight: 'bold',
      fontSize: '37px',
      color: '#fff',
      textAlign: isRtl ? 'right' : 'left',
    },
  };


  return (
    <div style={{
      background: 'linear-gradient(to right, #f3904f, #3b4371)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      ...(isRtl ? rtlStyles : {}),
    }}>
      <Container maxWidth="lg" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        ...(isMobile ? mobileStyles.bannerContainer : rtlContainerStyles),
      }}>
        <div style={{ flex: 1, ...(isRtl ? rtlStyles : {})  }}>
        <Image src={Image1} alt="Sales by Month" style={{ maxWidth: '450px', height: '70vh', objectFit: "contain" }} />
        </div>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          ...(isMobile ? mobileStyles.rightColumn : {}),
          ...(isRtl ? { flexDirection: 'column-reverse', alignItems: 'flex-start' } : {}),
        }}>
       
          <h1 style={{
            background: 'linear-gradient(to right, #141e30, #243b55)',
            fontSize: '15px',
            padding: '15px 20px',
            maxWidth: '195px',
            color:'#fff',
            borderRadius: '6px',
            marginBottom:'1rem',
            marginTop:'2.5rem',
            ...(isMobile ? mobileStyles.rightColumn : {}),
          }}>
           أهلاً بك في المغامرة
          </h1>
          <h3 style={isMobile ? mobileStyles.leftColumnH3 : desktopStyles.leftColumnH3} >
            الاستشارات استثمار طويل الأجل في مستقبل أهدافك.
          </h3>
          <p style={{ fontWeight: 'bold',marginTop:'1.5rem',...(isRtl ? rtlStyles : {}) }}>
            نقدم لك الدعم المهني لطموحاتك - يبدأ خطتك الاستثمارية الشخصية معنا من الصفر
          </p>
          <button style={{
            background: 'linear-gradient(to right, #141e30, #243b55)',
            color: '#fff',
            width:'180px',
            height:'45px',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '6px',
            marginTop:'2rem',
            fontSize:'15px',
            fontWeight:'600',
            ...(isRtl ? rtlStyles : {}),
          }}>
            احجز الآن
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
