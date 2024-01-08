import AboutBanner from '@/components/English/AboutBanner/AboutBanner'
import AboutColumn from '@/components/English/AboutColumn/AboutColumn'
import Footer from '@/components/English/Footer/Footer'
import Story from '@/components/English/Story/Story'
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