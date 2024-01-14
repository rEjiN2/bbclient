"use client"
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React,{useRef} from 'react' 
import User from '../../../../public/userupdate.png'
import Edit from '../../../../public/edit.svg'

const Profile = () => {
    const inputRef = useRef(null)

    const handleImage =()=>{
        inputRef.current.click()
    }

    const handleUpload =()=>{

    }


    
  return (
    <Box sx={{display:'grid',placeItems:'center',height:'90dvh',width:'100%'}}>


        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid #f3f3f3',position:'relative',width:'40%',flexDirection:'column',background:"#f3f6f9"}}>
            <Box sx={{position:'absolute',top:-90,}}>
            <Avatar alt='user'  sx={{width:'150px', height:'150px',position:'relative'}}>

             <Image src={User} fill alt='User' />
            </Avatar>
             <Image onClick={handleImage} src={Edit} width={25} height={25} style={{position:'absolute',right:10,bottom:5,cursor:'pointer'}} />
             <input
             type='file'
             ref={inputRef}
             onClick={handleUpload}
             style={{display:'none'}}
             />
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:'0.2rem',color:'#32385a',marginTop:'7rem'}}>
             <Typography align='left' fontWeight='bold'>Username</Typography>
             <TextField  sx={{width:'100%'}} InputProps={{style:{
                height:'40px'
             }}} />
            </Box>

            <Box sx={{display:'flex',flexDirection:'column',gap:'0.2rem',color:'#32385a',marginTop:'0.5rem'}}>
             <Typography align='left' fontWeight='bold'>Current Password</Typography>
             <TextField  sx={{width:'100%'}} InputProps={{style:{
                height:'40px'
             }}} />
            </Box>

            <Box sx={{display:'flex',flexDirection:'column',gap:'0.2rem',color:'#32385a',marginTop:'0.5rem'}}>
             <Typography align='left' fontWeight='bold'>New Password</Typography>
             <TextField  sx={{width:'100%'}} InputProps={{style:{
                height:'40px'
             }}} />
            </Box>

            <Box sx={{display:'flex',flexDirection:'column',gap:'0.2rem',color:'#32385a',marginTop:'0.5rem'}}>
             <Typography align='left' fontWeight='bold'>Confirm Password</Typography>
             <TextField  sx={{width:'100%'}} InputProps={{style:{
                height:'40px'
             }}} />
            </Box>


            <Button sx={{height:'40px',background:'#32385a',color:'white',textTransform:'none',margin:'2rem 0rem',width:'30%','&:hover':{background:'#32385a',color:'white'}}}>Update Profile</Button>
              
        </Box>

    </Box>
  )
}

export default Profile