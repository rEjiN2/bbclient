import Footer from '@/components/English/Footer/Footer'
import Health from '@/components/English/Health/Health'
import Reservation from '@/components/English/Reservation/Reservation'
import { Box } from '@mui/material'
import React from 'react'


const page = () => {
  return (
    <div style={{height:'90dvh',overflow:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <Health/>
        <Reservation/>
        <Box sx={{marginTop:'2rem'}}>
        <Footer/>
        </Box>
    </div>
  )
}

export default page