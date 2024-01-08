import Booking from '@/components/Arabic/BookingArabic/Booking'
import Footer from '@/components/English/Footer/Footer'
import { Box } from '@mui/material'
import React from 'react'

const Bookings = () => {



  return (
    <>
    <Box sx={{height:'90dvh',overflow:'auto'}}>

    <Booking/>
    <Footer/>
    </Box>

    </>
  )
}

export default Bookings