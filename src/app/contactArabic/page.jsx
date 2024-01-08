
import Contact from '@/components/Arabic/Contact/Contact'
import Footer from '@/components/English/Footer/Footer'
import { Box } from '@mui/material'
import React from 'react'

const Connect = () => {
  return (
   
   <Box sx={{height:'90dvh',overflow:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
   <Contact/>
   <Footer/>
 </Box>
  )
}

export default Connect