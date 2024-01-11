'use client';
import * as React from 'react';
import { useState } from 'react';
import { Grid, Typography, Paper, Box, Button, Container } from '@mui/material';
import Image from 'next/image';
import Icon1 from '../../../../public/icons Home/1.png'
import Icon2 from '../../../../public/icons Home/2.png'
import Icon3 from '../../../../public/icons Home/3.png'
import Icon4 from '../../../../public/icons Home/4.png'

const services = [
  {
    title: 'Business Development',
    image: Icon2,
    description: 'Optimize project stages and goals with innovative development strategies for startups across various fields.',
  },
  {
    title: 'Brand Strategy',
    image: Icon1,
    description: 'Craft unique, memorable brands with compelling stories and marketing messages to stand out in a saturated market.',
  },
  {
    title: 'Design and User Experience',
    image: Icon4,
    description: 'Create modern, device-friendly designs for seamless user experiences, enhancing customer engagement and conversions.',
  },
  {
    title: 'Business Consulting',
    image: Icon3,
    description: 'Elevate business projects with forward-thinking solutions tailored for the aspirations of a new generation.',
  },
];


const Columns =()=> {
    const [expandedService, setExpandedService] = useState(null);

    const toggleExpand = (index) => {
      if (expandedService === index) {
        setExpandedService(null);
      } else {
        setExpandedService(index);
      }
    };
  
    return (
      <Container maxWidth="lg" sx={{ padding: '5rem 0 3rem ' }}>
        <Typography  fontSize='20px' textTransform='none' marginBottom={'1rem'}   sx={{ textAlign: 'center', color: '#485563',fontWeight:'600' }}>
        WHAT WE DO
        </Typography>
      <Typography variant="h4" textTransform='none' component="h1" gutterBottom style={{ textAlign: 'center', marginBottom: 32, color: 'rgb(2,77,142)',fontWeight:'bold' }}>
        We listen attentively, offer advice and make a difference.
      </Typography>
      <Grid container spacing={3}>
  {services.map((service, index) => (
    <Grid item xs={12} sm={6} md={3} lg={3} key={index} style={{borderRadius:'10px' }}>
      <Paper elevation={6} style={{ padding: 18, display: 'flex', flexDirection: 'column', alignItems: 'left', height: '100%', backgroundColor: '#fafafa',borderRadius:'10px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 2, backgroundColor: 'transparent', borderRadius: '50%', padding: '10px' }}>
      <Image 
    src={service.image} 
    alt={service.title} 
    width={70} 
    height={70} 
    style={{ padding: "5px", objectFit: "contain" }}
/>
      </Box>
        <Typography variant="body1" style={{ padding: '10px 0', overflow: 'hidden', textAlign: 'left', color: '#000', fontWeight: 'bold',fontSize:'18px' }}>
          {service.title}
        </Typography>
        <Typography variant="body1" style={{ height: '90px', overflow: 'hidden', textAlign: 'left', color: '#616161', textAlign: 'justify',fontSize:'14px' }}>
          {service.description}
        </Typography>
      </Paper>
    </Grid>
  ))}
</Grid>
    </Container>
  );
}


export default Columns