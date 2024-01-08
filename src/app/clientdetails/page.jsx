
import ClientDetails from '@/components/English/ClientDetails/ClientDetails'
import Footer from '@/components/English/Footer/Footer'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Box sx={{overflow:'auto',height:'90dvh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>

      <ClientDetails />
      <Footer/>
    </Box>
  )
}

export default page