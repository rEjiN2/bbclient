
import Checkout from '@/components/English/Checkout/Checkout'
import Footer from '@/components/English/Footer/Footer'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Box sx={{height:'90dvh',overflow:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
      <Checkout/>
      <Footer/>
    </Box>
  )
}

export default page