"use client"
import { Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Stock from '../../../../public/stockImg.jpeg'
import Stock1 from '../../../../public/stockImg1.jpeg'
import Stock2 from '../../../../public/stockImg2.jpeg'
import Image from 'next/image'

const Cart = () => {
 const [bookings,setBookings] = useState([])


 useEffect(()=>{
  const fetchBooking = async()=>{
    const userId = localStorage.getItem('userId')
const res = await fetch(`/api/getMyBookings/${userId}`,{
  method:'GET',
  headers:{
    'Content-type':'aaplication/json'
  }
})

const booking = await res.json()
setBookings(booking)
console.log(booking,"vada kuttappa");
  }


  fetchBooking()
 },[])


 console.log(bookings,"Bookings");



  const telLink = 'https://t.me/+Z5agUe32NKw0NTFl'
  return (
    <Container sx={{height:'90dvh',overflow:'auto'}}>
        <Box sx={{padding:'2rem'}}>
            <Typography  fontSize='25px' fontWeight='600' paddingLeft='1rem' color='#f3904f'>Bookings</Typography>
            <Box sx={{background:'#f3f3f3' ,height:'1px' ,width:'100%',margin:'1rem'}}></Box>

            {bookings.length==0 && (
              <Box sx={{display:'grid',placeItems:'center',height:'50vh'}}>
                     <Typography fontSize='25px' color='#f3904f' fontWeight='600'>There are no Bookings Yet</Typography>
              </Box>

            )}
            
            {bookings.length!=0 && bookings.map((booking,index)=>(
 <Box key={index}>
 <Box  sx={{ display:'flex',justifyContent:'space-between' ,gap:'1rem',  width:'100%',height:'250px',marginTop:'3rem',borderRadius:'6px',padding:'2rem'}}>
            <div style={{ position: 'relative', width: '25%', height: '100%' }}>
            <Image src={Stock1} layout="fill" objectFit="cover"  alt='events'/>
            </div>
              
              <Box sx={{display:'flex',flexDirection:'column',gap:'1rem' }}>
               <Typography  fontSize='19px' fontWeight='500' color='#021b79'>Item &nbsp; &nbsp;&nbsp;: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   {booking.package}</Typography>
               <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500' color='#021b79'>Date &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {booking.date}</Typography>
               <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500' color='#021b79'>Time &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {booking.time}</Typography>
               <Typography  fontSize='16px' paddingTop='0.1rem' fontWeight='500'  color='#021b79'>Link &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; {booking.link ? 
          <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#f05933' }}>
            {booking.link}
          </span> : 
          "The link will reach to you shortly after admin approval"
        }  </Typography>
               <Typography  fontSize='13px' paddingTop='0.1rem' fontWeight='500' align='right'  color='#021b79'>For any queries contact our admin +971 558899744 </Typography>

              <Box sx={{display:'flex',alignItems:'center',justifyContent:'end',paddingTop:'1rem',gap:'1rem'}}>
                  <Button 
                href={telLink}
                target="_blank"
                rel="noopener noreferrer"
               sx={{fontFamily:'Rubik',fontSize:'15px',fontWeight:'400',background:'#f3904f',textTransform:'none',width:'100%',color:'#fff','&:hover':{background:'linear-gradient(to right, #f3904f, #3b4371)',color:'#fff'}}}>Join Telegram Group</Button>
              </Box>
               </Box>
              </Box>
              
 </Box>

            ))}
            

              
        </Box>
    </Container>
  )
}

export default Cart