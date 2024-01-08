import AboutBanner from '@/components//Arabic/aboutBanner/aboutbanner'
import AboutColumn from '@/components/Arabic/AboutColumnarabic/AboutColumn'
import Footer from '@/components/English/Footer/Footer'
import Story from '@/components//Arabic/StoryArabic/Story'
import { Container } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div style={{overflow:'auto',height:'90dvh'}}>
           <AboutBanner/>

         
             <Story/>
           
            
           <AboutColumn/>

           <Footer/>
    </div>
  )
}

export default About