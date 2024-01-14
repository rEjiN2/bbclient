"use client"
import React,{useState} from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/UserContext'
const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const router = useRouter()
    const {login} = useUser()

    const handleLogin = async(e) => {
        // e.preventDefault()
        try{
          const res = await fetch('/api/auth/login',{
            method:'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
           })
           const response = await res.json()
           console.log(response,"hui");
           if(res.ok){
            const userId = response._id;

            if (userId) {
                localStorage.setItem('userId', userId);
            }
            login(response);
            router.push('/bookings')
            
           }
        }
        catch(err){
          console.log(err.message);
        }       
      };

      const handleRegister=()=>{
        router.push('/register')
      }



  return (
    <Box sx={{height:'80dvh',display:'flex',alignItems:'center',justifyContent:'center'}}>
         <Box sx={{width:'30%',background:'#f3f6f9',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',height:'50vh',borderRadius:'20px'}} >
               <Typography fontSize='28px'  color='#32385a' fontWeight={600}>Login</Typography>
               <Box sx={{width:'70%',}}>
               <Typography marginTop='2rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Email*</Typography>
               <TextField sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setEmail(e.target.value)}/>
               </Box>

               <Box sx={{width:'70%'}}>
               <Typography marginTop='1rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Password*</Typography>
               <TextField sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setPassword(e.target.value)}/>
               </Box>

               <Button onClick={handleLogin} sx={{background:'#32385a',color:'#fff',width:'40%',borderRadius:'20px',margin:'3rem 0rem','&:hover':{background:'#32385a',color:'#fff'}}}>Login</Button>
               <Typography onClick={handleRegister} marginTop='1rem' fontSize='16px' align='left' color='#32385a' fontWeight={400}>Not Registered <span style={{textDecoration:'underline',color:'#7f63f4',fontWeight:'600',cursor:'pointer'}} >Register Now</span></Typography>
           
         </Box>
    </Box>
  )
}

export default Login