"use client"
import React from 'react'
import { Box,Typography,Button, Container, TextField } from '@mui/material'
import { useRouter } from 'next/navigation'

const ClientDetails = () => {
  const router = useRouter()
  const handleCheckout = ()=>{
      router.push('/checkout')
  }
  return (
    <Container sx={{paddingTop:'3rem',}}>
        <Box>
          <Typography  fontSize='20px' fontWeight='500' color='#021b79' paddingTop='1rem'>Enter client Details</Typography>
          <Box sx={{ width: '100%', height: '2px', background: '#f3f3f3' }}></Box>
          <Box sx={{display:'flex',alignItems:'center',gap:'1rem'}}>
          <TextField placeholder='Enter the Name' type='text' InputProps={{ style: { borderRadius: '8px', height: '40px', fontFamily: "Rubik", fontSize: '12px', width: '15rem',marginTop:'1rem' } }} />
          <TextField placeholder='Enter the Email' type='email' InputProps={{ style: { borderRadius: '8px', height: '40px', fontFamily: "Rubik", fontSize: '12px', width: '15rem',marginTop:'1rem' } }} />
          </Box>
          <Box>
          <TextField placeholder='Enter the Phone number' InputProps={{ style: { borderRadius: '8px', height: '40px', fontFamily: "Rubik", fontSize: '12px', width: '31rem',marginTop:'1rem' } }} />
          </Box>
        </Box>



        <Box sx={{paddingTop:'2rem'}}>
          <Typography  fontSize='20px' fontWeight='500' color='#021b79' paddingTop='1rem'>Booking Details</Typography>
          <Box sx={{ width: '100%', height: '2px', background: '#f3f3f3' }}></Box>
          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Typography  fontSize='15px' fontWeight='400' color='#2c3e50' paddingTop='1rem'>Item  </Typography>
          <Typography  fontSize='15px' fontWeight='400' color='#2c3e50' paddingTop='1rem'>Learn stocks from scratch 101 course</Typography>
          </Box>
          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Typography  fontSize='15px' fontWeight='400' color='#2c3e50' paddingTop='1rem'>Date & Time  </Typography>
          <Typography  fontSize='15px' fontWeight='400' color='#2c3e50' paddingTop='1rem'>December 30, 2023 at 6:00 PM</Typography>
          </Box>
          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Typography  fontSize='15px' fontWeight='400' color='#2c3e50' paddingTop='1rem'>Available</Typography>
          <Typography  fontSize='15px' fontWeight='400' color='#2c3e50' paddingTop='1rem'>Zoom Link will send it to you After Payment</Typography>
          </Box>
          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Typography  fontSize='15px' fontWeight='400' color='#2c3e50' paddingTop='1rem'>Session Timing</Typography>
          <Typography  fontSize='15px' fontWeight='400' color='#2c3e50' paddingTop='1rem'>1 Hour</Typography>
          </Box>

          <Typography  fontSize='17px' fontWeight='450' color='#021b79' paddingTop='2rem'>Payment Details</Typography>
          <Box sx={{ width: '20%', height: '2px', background: '#f3f3f3',marginTop:'0.2rem' }}></Box>
          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Typography  fontSize='15px' fontWeight='400' color='#2c3e50' paddingTop='1rem'>Total Amount</Typography>
          <Typography  fontSize='15px' fontWeight='400' color='#2c3e50' paddingTop='1rem'>AED 388 </Typography>
          </Box>
          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Typography  fontSize='15px' fontWeight='400' color='#2c3e50' paddingTop='1rem'>Tax</Typography>
          <Typography  fontSize='15px' fontWeight='400' color='#2c3e50' paddingTop='1rem'>AED 19.40 </Typography>
          </Box>

          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'2rem'}}>
          <Typography  fontSize='15px' fontWeight='400' color='#2c3e50' ></Typography>
          <Box sx={{ width: '20%', height: '2px', background: '#f3f3f3',marginTop:'0.5rem' }}></Box>
          </Box>
          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Typography  fontSize='17px' fontWeight='500' color='#2c3e50' paddingTop='1rem'>Total</Typography>
          <Typography  fontSize='15px' fontWeight='400' color='#2c3e50' paddingTop='1rem'>AED 407.40 </Typography>
          </Box>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Button onClick={handleCheckout} variant='contained' sx={{ background: 'linear-gradient(to right, #141e30, #243b55)', borderRadius: '8px', height: '40px', textTransform: 'none', fontFamily: "Rubik", fontSize: '12px', width: '17rem', marginTop: '3rem' }}>Book Now</Button>

        </Box>
    </Container>
  )
}

export default ClientDetails