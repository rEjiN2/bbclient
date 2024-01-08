"use client"
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Death from '../../../../public/death.jpg'
import Actor from '../../../../public/actor.jpeg'
import Fire from '../../../../public/fire.jpg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const news = [
  {
  id:1,
  title:'Thankappan ashari Chathu',
  descrition:'Pattik vecha vedi kundikk kond thankappan ashari chathu vecha vedi kundikk kond thankappan ashari chathu vecha vedi kundikk kond thankappan ashari chathu vecha vedi kundikk kond thankappan ashari chathu ',
  image:Death
  },
  {
    id:2,
    title:'Ee nadan cheyyunnath kandal ningal njettum',
    descrition:'Nink onnm vere pani illeda fundakale onnm vere pani illeda fundakale onnm vere pani illeda fundakale onnm vere pani illeda fundakale illeda fundakale onnm vere pani illeda fundakale illeda fundakale onnm vere pani illeda fundakale illeda fundakale onnm vere pani illeda fundakale illeda fundakale onnm vere pani illeda fundakale illeda fundakale onnm vere pani illeda fundakale',
    image:Actor
    },
    {
      id:3,
      title:'Vanam vitt yuvav marichu',
      descrition:'mukalilek vitta vanam pokathe thazhekk vannathan maran karanm vitta vanam pokathe thazhekk vannathan maran karanm vitta vanam pokathe thazhekk vannathan maran karanm vitta vanam pokathe thazhekk vannathan maran karanm vitta vanam pokathe thazhekk vannathan maran karanm ',
      image:Fire
    }
]
const NewsComponent = () => {
  const router = useRouter()
 const handleView = (id)=>{
 router.push(`/news/${id}`)
 }
  return (
    <Container sx={{height:'90dvh',overflow:'auto',}}>
           <Typography paddingTop='76px' color='#3b4371' fontWeight='600' fontSize='35px'>News</Typography>
           <Box sx={{marginTop:'.5rem',background:'#f3f3f3',height:'2px'}}></Box>

 

 {news.map((item)=>(
  <Box key={item.id} sx={{display:'flex',border:'solid 1px #f3f3f3' ,padding:'1rem',marginTop:'1.5rem' ,borderBlockWidth:3,gap:'1rem', flexDirection: {xs:'column', sm:'column',md:'row'}}}>
          <Box >
  <Image
    src={item.image}
    alt='newimg'
    width={200} 
    height={170} 
   
  />
</Box>
          <Box sx={{position:'relative'}} >
                <Typography color='#3b4371' fontWeight='600' fontSize='25px'>{item.title}</Typography>
               <Typography paddingTop='1rem' paddingLeft='1rem' color='#c0c0aa' sx={{width:{xs:300 ,sm:700, md:700,lg:700 ,xl:800}}} fontWeight='600'  textAlign='justify' fontSize='15px'>{item.descrition}</Typography>
               <Typography color='#f3904f'  sx={{position:'absolute' ,bottom:1,right:0,cursor:'pointer' ,textDecoration:'underline'}} onClick={()=>handleView(item.id)} fontWeight='600' fontSize='12px'>View More</Typography>
             </Box>
          </Box>
 ))}
          




           
    </Container>
  )
}

export default NewsComponent