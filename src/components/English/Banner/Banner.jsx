"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Image1 from '../../../../public/Arab.png';
import { Container } from '@mui/material';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobileStyles = {
    bannerContainer: {
      flexDirection: 'column',
    },
    rightColumn: {
      alignItems: 'center',
    },
    leftColumnH3: {
      fontWeight: 'normal',
      fontSize: '20px',
    },
  };

  const desktopStyles = {
    leftColumnH3: {
      fontWeight: 'bold',
      fontSize: '37px',
      color: '#fff',
      textAlign:'left'
    },
  };

  return (
    <div style={{
      background: 'linear-gradient(to right, #f3904f, #3b4371)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      
    }}>
      <Container maxWidth="lg" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        ...(isMobile ? mobileStyles.bannerContainer : {})
      }}>
        <div style={{ flex: 1 }}>
          <h1 style={{
            background: 'linear-gradient(to right, #141e30, #243b55)',
            fontSize: '15px',
            padding: '15px 20px',
            maxWidth: '195px',
            color:'#fff',
            borderRadius: '6px',
            marginBottom:'1rem',
            marginTop:'2.5rem'
          }}>
            Welcome to Venture
          </h1>
          <h3 style={isMobile ? mobileStyles.leftColumnH3 : desktopStyles.leftColumnH3} >
            Consulting is a long-term investment in your goals future.
          </h3>
          <p style={{ fontWeight: 'bold',marginTop:'1.5rem',textAlign:'left' }}>We offer you professional support for your ambitions - your personal investment plan starts with us from scratch</p>
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
            fontWeight:'600'
          }}>
            Book Now
          </button>
        </div>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          ...(isMobile ? mobileStyles.rightColumn : {})
        }}>
          <Image src={Image1} alt="Sales by Month" width={750}   style={{ height: '70vh',objectFit:"contain" }} />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
