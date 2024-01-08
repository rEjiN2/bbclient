"use client"
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BannerImage from '../../../../public/about2.jpg';

const BannerContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100vw; 
  height: 50vh;
  overflow: hidden;
`;



const CenteredText = styled(motion.div)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 54px;
  font-weight:'600';
  text-align: center;
  width: 100%;
`;


const CenteredText2 = styled(motion.div)`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  text-align: center;
  width: 100%;
`;



const AboutBanner = () => {
  return (
    <BannerContainer>
      <Image src={BannerImage} alt='ban' width={1920} height={600} style={{objectFit:'fill'}}  />

      <CenteredText>
        About Us
      </CenteredText>
      
      <CenteredText2>
      Connecting businesses, ideas, and people for greater impact.
      </CenteredText2>
      
      
      
    </BannerContainer>
  )
}

export default AboutBanner