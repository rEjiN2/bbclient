"use client"
import { Box, Container, Typography } from '@mui/material';
import React from 'react'
const columnsData = [
    {
      imageSrc: 'https://web.moxcreative.com/ventuure/wp-content/uploads/sites/20/2023/03/top-view-of-business-women-comparing-financial-graphs-with-management-statistics-expertise.jpg',
      caption: 'قيمنا',
      content: 'الاستشارات هي السر لفتح أفق رؤيتك.',
    },
    {
      imageSrc: 'https://web.moxcreative.com/ventuure/wp-content/uploads/sites/20/2023/03/consulting-each-other-on-a-project.jpg',
      caption: 'الشفافية',
      content: 'تصوّر، قم بالتصميم، وقدّم تنفيذاً استثنائياً.',
    },
    {
      imageSrc: 'https://web.moxcreative.com/ventuure/wp-content/uploads/sites/20/2023/03/top-view-of-business-women-comparing-financial-graphs-with-management-statistics-expertise.jpg',
      caption: 'استراتيجية الاستثمار',
      content: 'ساعد عملائنا على تحقيق كامل إمكانياتهم.',
    },
  ];
const AboutColumn = () => {
  return (
    <Container style={{marginTop:'3rem'}}>
        <Typography fontSize='30px' fontWeight='600' color='#f3904f' align='center'>الاختصاص</Typography>
    <div className="columns-container" >
      {columnsData.map(({ imageSrc, caption, content }, num) => (
        <div key={num} className="column">
          <img src={imageSrc} alt={`Column ${num + 1}`} className="column-image" />
          <div>
            <h5 className='caption' style={{paddingTop:'0.5rem',textAlign:'center'}}>{caption}</h5>
            <Box sx={{border:'1px solid #f3f3f3',padding:'0.5rem',borderRadius:'6px',marginTop:'0.5rem'}}>

            <p className='column_paragraph' style={{padding:'0.5rem',textAlign:'center',background:'linear-gradient(to right, #f3904f, #3b4371)',borderRadius:'6px',height:'60px',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>{content}</p>
            </Box>
          </div>
        </div>
      ))}
      <style jsx>{`
        .columns-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          padding:20px 0
        }
        .caption {
            color: #f3904f;
            font-size: 15px;
            font-weight: bold;
            padding : 15px 0 0 ;
        }
        .column-image {
            border-radius: 15px
        }
        .column_paragraph{
            text-align:'center';
            padding:'0.5rem';
            font-weight: 600;
        }

        @media (min-width: 768px) {
          .columns-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 1024px) {
          .columns-container {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        .column {
          box-sizing: border-box;
          padding: 10px;
          max-width: 100%;
        }

        .column-image {
          width: 100%;
          height: 250px; 
          object-fit: cover; 
        }
      `}</style>
    </div>
    </Container>
  )
}

export default AboutColumn