"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stock from '../../../../public/stockImg.jpeg'
import Image from 'next/image';
import {useRouter} from 'next/navigation';
export default function MediaCard({title,description,price,image}) {
  const router = useRouter()



  const handleBook = ()=>{
    router.push('/confirmbooking') 
  }
  return (
    <Card sx={{ maxWidth: 345, height: '100%',display: 'flex', flexDirection: 'column',justifyContent:'space-between' }}>
      <CardMedia
        sx={{ height: 140 }}
       
        title="Stock Bull"
      >
<div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src={image} fill  style={{objectFit:'cover'}}   alt='events'/>
          </div>
      </CardMedia>
      
      
      <CardContent   >
        <Typography    fontSize='20px' color='#093028' height={50} fontWeight='500'>
          {title}
        </Typography>
        <Typography   color="#636FA4"  height={50} fontSize='12px' >
          {description}
        </Typography>
      </CardContent>
      
      <CardActions sx={{display:'flex',justifyContent:'space-between'}} >
      <Typography   color="#636FA4"  fontSize='12px' fontWeight='600' >
        AED {price}
        </Typography>
        <Button variant='contained' onClick={handleBook}  sx={{background:'linear-gradient(to right, #f3904f, #3b4371)',borderRadius:'17.5px',height:'30px',textTransform:'none',fontSize:'12px'}}  size="large">Book Now</Button>
      </CardActions>
    </Card>
  );
}
