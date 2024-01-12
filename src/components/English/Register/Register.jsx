"use client"
import React,{useState} from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
const Register = () => {
    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error,setError] = useState('')
    const router = useRouter()


    const handleSignup = async()=>{
if(password !== confirmPassword){
    setError("Myr vere vallo panikkm po")
    return;
}
else{
    const res = await fetch("/api/auth/register",{
        method:'POST',
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
          password
        }),
      })

      const response = await res.json()
      if(res.ok){
 router.push('/login')
      }
}
    }




  return (
    <Box sx={{height:'80dvh',display:'flex',alignItems:'center',justifyContent:'center'}}>
         <Box sx={{width:'30%',background:'#f3f6f9',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',borderRadius:'20px'}} >
               <Typography fontSize='28px'  color='#32385a' fontWeight={600}>Signup</Typography>
               <Box sx={{width:'70%',}}>
               <Typography marginTop='2rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>User Name*</Typography>
               <TextField sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setUserName(e.target.value)}/>
               </Box>
               <Box sx={{width:'70%',}}>
               <Typography marginTop='1rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Email*</Typography>
               <TextField sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setEmail(e.target.value)}/>
               </Box>
               <Box sx={{width:'70%'}}>
               <Typography marginTop='1rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Password*</Typography>
               <TextField type='password' sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setPassword(e.target.value)}/>
               </Box>
               <Box sx={{width:'70%'}}>
               <Typography marginTop='1rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Confirm Password*</Typography>
               <TextField type='password' sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setConfirmPassword(e.target.value)}/>
               {error && (
                <Typography  marginTop='0.2rem' fontSize='12px' align='left' color='red' fontWeight={400}>{error}</Typography>
               )}
               </Box>

               <Button onClick={handleSignup}  sx={{background:'#32385a',color:'#fff',width:'40%',borderRadius:'20px',margin:'3rem 0rem','&:hover':{background:'#32385a',color:'#fff'}}}>Register</Button>
         </Box>
    </Box>
  )
}

export default Register