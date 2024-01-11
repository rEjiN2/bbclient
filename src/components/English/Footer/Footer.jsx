"use client"
import React from 'react';
import { Box, Container, Grid, List, ListItem } from '@mui/material';
import Logo from '../../../../public/logo3.png'
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
  return (
    <Box component="footer" sx={{ 
      background: '#32385a',
      padding: '20px', 
     
    }}>
      <Container maxWidth="lg">
   
        
        <Box sx={{display:'grid',placeItems:'center',padding:'1rem'}}>
          <Link href='./'><Image src={Logo} width={250} height={60}  /></Link>
        </Box>




        <Box sx={{ display: 'flex', justifyContent: 'center',gap:'20px' }}>
          <img src="https://static.wixstatic.com/media/a471c8_5d7e39e6472f4d8dbda385f27093408d~mv2.jpg/v1/fill/w_124,h_93,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/expo2020.jpg" alt="Icon 1" style={{ maxWidth: 'auto', height: '30px', marginRight: '10px' }} />
          <img src="https://static.wixstatic.com/media/a471c8_dab09b9cc8874bb48e070a802f4dede9~mv2.png/v1/fill/w_263,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dubai%20SME.png" alt="Icon 2" style={{ maxWidth: 'auto', height: '30px', marginRight: '10px' }} />
          <img src="https://static.wixstatic.com/media/a471c8_f71231b6b96c4d8cb05d53285b481a9b~mv2.png/v1/crop/x_0,y_801,w_2500,h_994/fill/w_156,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/msftslogo-01.png" alt="Icon 3" style={{ maxWidth: 'auto', height: '30px' }} />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
