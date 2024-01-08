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


              <Box sx={{ padding: '0.5rem 0.5rem 0.2rem 0.5rem', border: '1px solid #f3f3f3', boxShadow: '1.5px 2.6px 10px 0 rgba(119, 119, 119, 0.3)' }}>
                      <Image  src={WhoareWe} alt="Our Story" width='100%'  height={350} />
                  </Box>

                 

              </Box>

              <Box sx={{ flex: 1,alignItems: 'end', width: '100%',marginLeft:{md:'none',lg:'9rem'}, }}>
              <Typography fontSize='18px' align='left' color='#f3904f' fontWeight='600' >من نحن</Typography>
                  <Box sx={{ background: '#f3f3f3', height: '1px', width: '100%', marginTop: '0.3rem', marginBottom: '1.5rem', }}></Box>


                  <Typography fontSize='30px' color='#f3904f' fontWeight='600'> نحن السر وراء أفضل أيام الشركة. </Typography>

                   <Typography fontSize='15px' color='lightgray' fontWeight='500' textAlign='justify' paddingTop='1.5rem'>
                   إنها شركة استشارات إدارية متخصصة في العثور على حلول تطوير للمشاريع التجارية والحكومية. في الوقت الحالي، يحتاج عدد كبير من الشركات إلى العثور على حلول مبتكرة لزيادة المبيعات، وتسويق المنتجات، أو إدارة العمليات.
                  </Typography>
                  <Typography fontSize='15px' color='lightgray' fontWeight='500' textAlign='justify' paddingTop='1.5rem'>باستخدام استراتيجيات عالمية ومثبتة، نساعدك على تحقيق أهدافك وخلق تأثير من خلال تعزيز إدارة فريقك، وصفات القيادة، والتفكير والمنهجية.</Typography>
                  <Button sx={{ border: '1px solid #f3f3f3', borderRadius: '6px', color: '#fff', textTransform: 'none', width: '180px', marginTop: '1.5rem', background: 'linear-gradient(to right, #f3904f, #3b4371)' }}>Load More</Button>
              </Box>




          </Box>
      </Container>






  )
}

export default Story