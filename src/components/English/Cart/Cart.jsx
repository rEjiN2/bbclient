import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Stock from '../../../../public/stockImg.jpeg'
import Stock1 from '../../../../public/stockImg1.jpeg'
import Stock2 from '../../../../public/stockImg2.jpeg'
import Image from 'next/image'

const Cart = () => {
  const telLink = 'https://t.me/+Z5agUe32NKw0NTFl'
  return (
    <Container sx={{height:'90dvh',overflow:'auto'}}>
        <Box sx={{padding:'2rem'}}>
            <Typography  fontSize='25px' fontWeight='600' paddingLeft='1rem' color='#f3904f'>Bookings</Typography>
            <Box sx={{background:'#f3f3f3' ,height:'1px' ,width:'100%',margin:'1rem'}}></Box>
            <Box sx={{ display:'flex',justifyContent:'space-between' ,gap:'1rem',  width:'100%',height:'250px',marginTop:'3rem',borderRadius:'6px',padding:'2rem'}}>
            <div style={{ position: 'relative', width: '25%', height: '100%' }}>
            <Image src={Stock1} layout="fill" objectFit="cover"  alt='events'/>
          </div>
              
              <Box sx={{display:'flex',flexDirection:'column',gap:'1rem' }}>
               <Typography  fontSize='19px' fontWeight='500' color='#021b79'>Item &nbsp; &nbsp;&nbsp;: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   Stock Learning Crash Course by Tint Clain-two days</Typography>
               <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500' color='#021b79'>Timing &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3pm - 4pm(1Hr)</Typography>
               <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500' color='#021b79'>Price &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 789 AED</Typography>
               <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500'  color='#021b79'>Link &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; <span  style={{textDecoration:'underline',cursor:'pointer',color:'#f05933'}}>https://zoom.us/wc/join/meetingId</span>  </Typography>
              <Box sx={{display:'flex',alignItems:'center',justifyContent:'end',paddingTop:'1rem',gap:'1rem'}}>
              <Button 
              
              sx={{fontFamily:'Rubik',fontSize:'15px',fontWeight:'400',background:'#3b4371',textTransform:'none',width:'30%',color:'#fff','&:hover':{background:'linear-gradient(to right, #f3904f, #3b4371)',color:'#fff'}}}>Review Booking </Button>
               <Button 
                href={telLink}
                target="_blank"
                rel="noopener noreferrer"
               sx={{fontFamily:'Rubik',fontSize:'15px',fontWeight:'400',background:'#f3904f',textTransform:'none',width:'30%',color:'#fff','&:hover':{background:'linear-gradient(to right, #f3904f, #3b4371)',color:'#fff'}}}>Join Telegram Group</Button>
              </Box>
               </Box>
              </Box>
              <Box sx={{background:'#f3f3f3' ,height:'1px',margin:'1rem' ,width:'100%'}}></Box>   

              <Box sx={{ display:'flex',justifyContent:'space-between' ,gap:'1rem',  width:'100%',height:'250px',marginTop:'2rem',borderRadius:'20px',padding:'2rem'}}>
            <div style={{ position: 'relative', width: '25%', height: '100%' }}>
            <Image src={Stock2} layout="fill" objectFit="cover"  alt='events'/>
          </div>
              
              <Box sx={{display:'flex',flexDirection:'column' ,gap:'1rem',}}>
               <Typography  fontSize='19px' fontWeight='500' color='#021b79'>Item &nbsp; &nbsp;&nbsp;: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   Individual consultation with Dr. Muhammad Al-Fandi</Typography>
               <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500' color='#021b79'>Timing &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 8pm - 9pm(1Hr)</Typography>
               <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500' color='#021b79'>Price &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1326 AED</Typography>
               <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500'  color='#021b79'>Link &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; <span  style={{textDecoration:'underline',cursor:'pointer',color:'#f05933'}}>https://zoom.us/wc/join/meetingId</span>  </Typography>
              <Box sx={{display:'flex',alignItems:'center',justifyContent:'end',paddingTop:'1rem',gap:'1rem'}}>
              <Button  sx={{fontFamily:'Rubik',fontSize:'15px',fontWeight:'400',background:'#3b4371',textTransform:'none',width:'30%',color:'#fff','&:hover':{background:'linear-gradient(to right, #f3904f, #3b4371)',color:'#fff'}}}>Review Booking </Button>
               <Button
                href={telLink}
                target="_blank"
                rel="noopener noreferrer"
               sx={{fontFamily:'Rubik',fontSize:'15px',fontWeight:'400',background:'#f3904f',textTransform:'none',width:'30%',color:'#fff','&:hover':{background:'linear-gradient(to right, #f3904f, #3b4371)',color:'#fff'}}}>Join Telegram Group</Button>
              </Box>
               </Box>
              </Box>

              <Box sx={{background:'#f3f3f3' ,height:'1px' ,width:'100%',marginTop:'2rem'}}></Box>   

              <Box sx={{ display:'flex',justifyContent:'space-between' ,gap:'1rem',  width:'100%',height:'250px',marginTop:'2rem',borderRadius:'20px',padding:'2rem 2rem 2rem 1rem'}}>
            <div style={{ position: 'relative', width: '25%', height: '100%' }}>
            <Image src={Stock} layout="fill" objectFit="cover"  alt='events'/>
          </div>
              
              <Box sx={{display:'flex',flexDirection:'column' ,gap:'1rem',}}>
               <Typography  fontSize='19px' fontWeight='500' color='#021b79'>Item &nbsp; &nbsp;&nbsp;: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   Individual consultation with Dr. Muhammad Al-Fandi</Typography>
               <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500' color='#021b79'>Timing &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 8pm - 9pm(1Hr)</Typography>
               <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500' color='#021b79'>Price &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1326 AED</Typography>
               <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500'  color='#021b79'>Link &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; <span  style={{textDecoration:'underline',cursor:'pointer',color:'#f05933'}}>https://zoom.us/wc/join/meetingId</span>  </Typography>
              <Box sx={{display:'flex',alignItems:'center',justifyContent:'end',paddingTop:'1rem',gap:'1rem'}}>
              <Button sx={{fontFamily:'Rubik',fontSize:'15px',fontWeight:'400',background:'#3b4371',textTransform:'none',width:'30%',color:'#fff','&:hover':{background:'linear-gradient(to right, #f3904f, #3b4371)',color:'#fff'}}}>Review Booking </Button>
               <Button
                href={telLink}
                target="_blank"
                rel="noopener noreferrer"
               sx={{fontFamily:'Rubik',fontSize:'15px',fontWeight:'400',background:'#f3904f',textTransform:'none',width:'30%',color:'#fff','&:hover':{background:'linear-gradient(to right, #f3904f, #3b4371)',color:'#fff'}}}>Join Telegram Group</Button>
              </Box>
               </Box>
              </Box>
        </Box>
    </Container>
  )
}

export default Cart