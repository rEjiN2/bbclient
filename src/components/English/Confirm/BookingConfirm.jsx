"use client"
import React,{useState} from 'react'
import { Box,Typography,Button, Container, TextField } from '@mui/material'
import Calendar from '../Calendar/Calendar'
import TimeRange from '../TimePicker/TimePicker'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation'
const BookingConfirm = () => {
  const router = useRouter()
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

   const handleBook = ()=>{
    router.push('/clientdetails')
   }
  return (
    <Container  >
      <Box sx={{ padding: '2rem' }}>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Box>
            <Typography  fontSize='22px' fontWeight='600' color='#021b79'>Book Now</Typography>
            <Box sx={{ width: '100%', height: '2px', background: '#f3f3f3' }}></Box>
          </Box>
          <Box sx={{ paddingTop: '1.5rem' }}>
            <Typography  fontSize='20px' fontWeight='550' color='#021b79' >Learn stocks from scratch 101 course</Typography>
            <Typography  fontSize='13px' fontWeight='400' color='#2c3e50' >Check our availability and book a date and time that suits you</Typography>
          </Box>
        </Box>


        <Box sx={{ paddingTop: '2rem', display: 'flex', gap: '2rem',justifyContent:'center' }}>
          <Box sx={{ paddingTop: '1rem' }}>
            <Typography align='center'  fontSize='15px' fontWeight='500' color='#021b79'>Select your date</Typography>
            <Calendar />
          </Box>

          {/* <Box sx={{ paddingTop: '1rem' }}>
            <Typography align='center'  fontSize='15px' fontWeight='500' color='#021b79' paddingBottom='1.5rem'>Select your time range</Typography>
            <TimeRange />
          </Box> */}

          <Box sx={{ paddingTop: '1rem' }}>
            <Typography align='center'  fontSize='15px' fontWeight='500' color='#021b79' paddingBottom='1.5rem'>Availability</Typography>
            <Button variant='contained' sx={{ background: 'linear-gradient(to right, #141e30, #243b55)', borderRadius: '8px', height: '30px', textTransform: 'none', fontFamily: "Rubik", fontSize: '12px' }}>Check Your Availability</Button>
          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Accordion sx={{ width: '200px', boxShadow: 'none', paddingBottom: '0.8rem' }} disableGutters={true} square>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography align='center'  fontSize='15px' fontWeight='500' color='#021b79' >Service Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography align='left'  fontSize='11px' fontWeight='400' color='#2c3e50'>
                  Individual consultation with Saif Al Naqbi - later appointments
                </Typography>
                <Typography align='left'  fontSize='13px' fontWeight='500' color='#2c3e50' paddingTop='1rem'>
                  Price :       AED 1368
                </Typography>
              </AccordionDetails>
            </Accordion>

            <TextField placeholder='Apply Coupon' InputProps={{ style: { borderRadius: '8px', height: '30px', fontFamily: "Rubik", fontSize: '12px', width: '100%' } }} />
            <Button variant='contained' sx={{ background: 'linear-gradient(to right, #141e30, #243b55)', borderRadius: '8px', height: '30px', textTransform: 'none', fontFamily: "Rubik", fontSize: '12px', width: '100%', marginTop: '1rem' }}>Apply</Button>

          </Box>


        </Box>

        <Box sx={{ width: '100%', height: '2px', background: '#f3f3f3',marginTop:'2rem' }}></Box>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Button variant='contained' onClick={handleBook}  sx={{ background: 'linear-gradient(to right, #141e30, #243b55)', borderRadius: '8px', height: '45px', textTransform: 'none', fontFamily: "Rubik", fontSize: '12px', width: '30%', marginTop: '3rem' }}>Go Next</Button>
        </Box>
        
      </Box>
    </Container>
  )
}

export default BookingConfirm