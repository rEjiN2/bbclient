"use client"
import React, { useState } from 'react';
import  {Box, Button, Container, Typography} from '@mui/material'
import Image from 'next/image';
import WhoareWe from '../../../../public/img.jpg';
import WhoareWe2 from '../../../../public/img22.png';

const Story = () => {
    const [showMore, setShowMore] = useState(false);

    const handleButtonClick = () => {
      setShowMore(!showMore);
    };
  return (
      <Container sx={{ marginTop: '2rem', width: '100vw' }}>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' }, width: '100%',gap:'2rem' }}>

              <Box sx={{ flex: 1, width: '100%' }}>

                  <Typography fontSize='18px' align='left' color='#f3904f' fontWeight='600' >WHO WE ARE</Typography>
                  <Box sx={{ background: '#f3f3f3', height: '1px', width: '100%', marginTop: '0.3rem', marginBottom: '1.5rem', }}></Box>


                  <Typography fontSize='30px' color='#f3904f' fontWeight='600'> We are the magic behind the company’s best days. </Typography>

                   <Typography fontSize='15px' color='lightgray' fontWeight='500' textAlign='justify' paddingTop='1.5rem'>
                      It is a management consulting company specialized in finding development solutions for commercial and governmental projects. Today, a large number of companies need to find innovative solutions to increase sales, marketing, or manage operations.
                  </Typography>
                  <Typography fontSize='15px' color='lightgray' fontWeight='500' textAlign='justify' paddingTop='1.5rem'>Using global and proven strategies, we help you achieve your goals and create influence by strengthening your team's management, leadership qualities, mindset and methodology.</Typography>
                  <Button sx={{ border: '1px solid #f3f3f3', borderRadius: '6px', color: '#fff', textTransform: 'none', width: '180px', marginTop: '1.5rem', background: 'linear-gradient(to right, #f3904f, #3b4371)' }}>Load More</Button>

              </Box>

              <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', width: '100%',marginLeft:{md:'none',lg:'9rem'} }}>
                  <Box sx={{ padding: '0.5rem 0.5rem 0.2rem 0.5rem', border: '1px solid #f3f3f3', boxShadow: '1.5px 2.6px 10px 0 rgba(119, 119, 119, 0.3)' }}>
                      <Image  src={WhoareWe} alt="Our Story" width='100%'  height={350} />
                  </Box>
              </Box>




          </Box>
      </Container>






  )
}

export default Story