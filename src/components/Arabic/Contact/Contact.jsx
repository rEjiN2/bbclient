"use client"
import { Box,Typography,TextField,Button,Container } from '@mui/material'
import  React,{useState} from 'react'
import ContactUs from '../../../../public/contact1.jpg'
import Radio from '@mui/material/Radio';
import Image from 'next/image'
const Contact = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  return (
    <Container >
        <Box sx={{display:'flex',alignItems:'center',paddingTop:'3rem',gap:'2rem'}}>
           

            <Box sx={{flex:2,paddingLeft:'2.5rem',display:'flex',flexDirection:'column',gap:'1rem',justifyContent:'space-between'}}>
            <Typography fontFamily='Rubik' fontSize='25px' fontWeight='600' color='#021b79' sx={{direction:'rtl'}} >اتصل بنا</Typography>
            <Box sx={{ width: '100%', height: '2px', background: '#f3f3f3' ,textAlign:'right',direction:'rtl'}}></Box>
             <TextField   type='text' placeholder='أدخل اسمك' InputProps={{ style: { borderRadius: '8px', height: '40px', fontFamily: "Rubik", fontSize: '15px', width: '85%' ,direction:'rtl' ,direction:'rtl' } }} />
             <TextField   type='text' placeholder='أدخل بريدك الإلكتروني' InputProps={{ style: { borderRadius: '8px', height: '40px', fontFamily: "Rubik", fontSize: '15px', width: '85%' ,direction:'rtl' } }} />
             <TextField   type='text' placeholder='أدخل رقم هاتفك' InputProps={{ style: { borderRadius: '8px', height: '40px', fontFamily: "Rubik", fontSize: '15px', width: '85%' ,direction:'rtl' } }} />
             <Typography fontFamily='Rubik' fontSize='15px' fontWeight='500' color='#021b79'sx={{ direction:'rtl'}}>طلب مكالمة؟</Typography>
                         <Box sx={{display:'flex',alignItems:'center' ,direction:'rtl'}}>
                       <Box sx={{display:'flex',alignItems:'center'}}>
                         <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
        sx={{
            color: '#093028',
            '&.Mui-checked': {
              color: 'orange',
            },
          }}
      />
      <Typography fontFamily='Rubik' fontSize='13px' fontWeight='500' color='black'>نعم</Typography>
      </Box>
      <Box sx={{display:'flex',alignItems:'center'}}>
                         <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
        sx={{
            color: '#093028',
            '&.Mui-checked': {
              color: 'orange',
            },
          }}
      />
      <Typography fontFamily='Rubik' fontSize='13px' fontWeight='500' color='black'>لا</Typography>
      </Box>
                         </Box>
             <TextField   type='text' placeholder="أدخل الرسالة" multiline rows={6} maxRows={4}   InputProps={{ style: {borderRadius: '8px', fontFamily: "Rubik", fontSize: '15px', width: '85%',direction:'rtl'}}}  />
             <Button variant='contained' sx={{ background: 'linear-gradient(to right, #141e30, #243b55)', borderRadius: '8px', height: '45px', textTransform: 'none', fontFamily: "Rubik", fontSize: '15px', width: '85%' }}>إرسال</Button>
            </Box>
            <Box sx={{flex:1,display:'flex' ,alignItems:'center',justifyContent:'center'}}>
            <Box sx={{flex:1,flexGrow:1,height:'600px',width:'200px' ,boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.1)',borderRadius:'11px'}}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src={ContactUs} fill style={{borderRadius:'11px',objectFit:'cover'}}  alt='events'/>
          </div>
            </Box>
            </Box>
        </Box>
        
    </Container>
  )
}

export default Contact