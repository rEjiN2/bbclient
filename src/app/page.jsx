"use client"
import React from 'react'
import Banner from '@/components/English/Banner/Banner'
import BannerArabic from '../components/Arabic/Banner/Banner'
import SocialMediaSidebar from '@/components/English/SocialMedia/SocialMedia'
import Columns from '@/components/English/Columns/Column'
import ColumnArabic from '@/components/Arabic/Columns/column'
import Counter from '@/components/English/Counter/Counter'
import CounterArabic from '@/components/Arabic/Counter/Counter'
import { Box } from '@mui/material'
 import ProjectItems from '@/components/English/Projects/Project'
 import ProjectItemsArabic from '../components/Arabic/projectItems/projectitems'
import Connecting from '@/components/English/Connect/Connect'
import Footer from '@/components/English/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'

const Home = () => {
  const { language } = useLanguage();

  console.log(language,"lang");
  return (
    <div style={{overflow:'auto',height:'90dvh'}}>
     
     {language === 'english' ? <Banner /> : <BannerArabic />}
     <Box sx={{display:{xs:'none', sm:'none',md:'none',lg:'block'}}}>
     <SocialMediaSidebar/>
     </Box>
    
     {language === 'english' ? <Columns/> : <ColumnArabic/>  }
     {language === 'english' ? <Counter/> : <CounterArabic/>  }
     {language === 'english' ? <ProjectItems/> : <ProjectItemsArabic/>  }
     
     
     
     
  
     <Footer/>
    </div>
  )
}

export default Home