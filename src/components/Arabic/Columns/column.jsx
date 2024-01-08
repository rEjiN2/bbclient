'use client';
import * as React from 'react';
import { useState } from 'react';
import { Grid, Typography, Paper, Box, Button, Container } from '@mui/material';
import Image from 'next/image';
import Icon1 from '../../../../public/icons Home/1.png';
import Icon2 from '../../../../public/icons Home/2.png';
import Icon3 from '../../../../public/icons Home/3.png';
import Icon4 from '../../../../public/icons Home/4.png';

const services = [
  {
    title: 'تطوير الأعمال',
    image: Icon2,
    description: 'تحسين مراحل وأهداف المشروع بإستراتيجيات تطوير مبتكرة للشركات الناشئة في مختلف المجالات.',
  },
  {
    title: 'استراتيجية العلامة التجارية',
    image: Icon1,
    description: 'ابتكار علامات تجارية فريدة وذات طابع خاص مع قصص ورسائل تسويقية جذابة للتميز في سوق مشبع.',
  },
  {
    title: 'التصميم وتجربة المستخدم',
    image: Icon4,
    description: 'إنشاء تصاميم عصرية تتوافق مع الأجهزة لتجربة مستخدم سلسة، مما يعزز تفاعل العملاء وزيادة التحويلات.',
  },
  {
    title: 'الاستشارات التجارية',
    image: Icon3,
    description: 'رفع مستوى المشاريع التجارية بحلول مبتكرة مصممة خصيصًا لطموحات الجيل الجديد.',
  },
];

const Columns = () => {
    const [expandedService, setExpandedService] = useState(null);

    const toggleExpand = (index) => {
      if (expandedService === index) {
        setExpandedService(null);
      } else {
        setExpandedService(index);
      }
    };

    return (
      <Container maxWidth="lg" sx={{ padding: '1rem', direction: 'rtl' }}>
        <Typography fontSize='20px' textTransform='none' marginBottom={'1rem'} sx={{ textAlign: 'center', color: '#485563', fontWeight: '600' }}>
          ما نقوم به
        </Typography>
        <Typography variant="h4" textTransform='none' component="h1" gutterBottom style={{ textAlign: 'center', marginBottom: 32, color: 'rgb(2,77,142)', fontWeight: 'bold' }}>
          نستمع بعناية، نقدم النصيحة ونحدث فرقًا.
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={index} style={{ borderRadius: '10px' }}>
              <Paper elevation={6} style={{ padding: 18, display: 'flex', flexDirection: 'column', alignItems: 'left', height: '100%', backgroundColor: '#fafafa', borderRadius: '10px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 2, backgroundColor: 'transparent', borderRadius: '50%', padding: '10px' }}>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    width={70} 
                    height={70} 
                    style={{ padding: "5px", objectFit: "contain"  }}
                  />
                </Box>
                <Typography variant="body1" style={{ padding: '10px 0', overflow: 'hidden', textAlign: 'right', color: '#000', fontWeight: 'bold', fontSize: '18px' }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" style={{ height: '90px', overflow: 'hidden', textAlign: 'right', color: '#616161', textAlign: 'justify', fontSize: '14px' }}>
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
}

export default Columns;
