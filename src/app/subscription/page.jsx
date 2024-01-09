"use client";
import React, { useState } from 'react';
import {
  Typography, Grid, Card, CardContent, Button, Box, Container, ToggleButton, ToggleButtonGroup
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Footer from '@/components/English/Footer/Footer';
import ClearIcon from '@mui/icons-material/CancelRounded';


const SubscriptionPage = () => {
    const [billingPeriod, setBillingPeriod] = useState('Per Month');
  
    const handleBillingChange = (event, newBillingPeriod) => {
      if (newBillingPeriod) {
        setBillingPeriod(newBillingPeriod === 'monthly' ? 'Per Month' : 'Per Year');
      }
    };
  

  const plans = [
    {
      Title: 'Newsletter',
      name: 'BASIC',
      price: 'AED 75',
      period: 'Per Month',
      features: [
        'No telegram Access',
        'Mailing Address',
        'Mail Scanning & Security',
        'HD Audio & Video Calls'
      ],
      buttonText: 'SELECT PLAN'
    },
    {
      Title: 'Newsletter',
      name: 'PREMIUM',
      price: 'AED 750',
      period: 'Per Year',
      features: [
        'No telegram Access',
        'Vet Features',
        'Mailing Address',
        'Mail Scanning & Security',
        'HD Audio & Video Calls'
      ],
      buttonText: 'SELECT PLAN'
    },
    {
      Title: 'Telegram Group',
      name: 'BASIC',
      price: 'AED 300',
      period: 'Per Month',
      features: [
        'Newsletter access',
        'Mailing Address',
        'Mail Scanning & Security',
        'HD Audio & Video Calls'
      ],
      buttonText: 'SELECT PLAN'
    },
    {
      Title: 'Telegram Group',
      name: 'PREMIUM',
      price: 'AED 3100',
      period: 'Per Year',
      features: [
        'Newsletter access',
        'Vet Features',
        'Unlimited Audio & Video Call',
        'Ultra HD Quality',
        'Unlimited Users'
      ],
      buttonText: 'SELECT PLAN'
    }
  ];
  const filteredPlans = plans.filter((plan) => plan.period === billingPeriod);

  return (
    <div style={{ overflow:"auto",height:"90dvh"}}>
      <Container maxWidth="lg" style={{ paddingTop: '5vh', paddingBottom: '9vh'}}>
        <Box textAlign="center" marginBottom={4}>
          <Typography variant="h2" gutterBottom style={{ color: '#3b4371', fontWeight: 'bold' }}>
            Choose Your Plan
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Discover the perfect plan for your needs and enjoy our exclusive features.
          </Typography>

          <ToggleButtonGroup
            color="primary"
            value={billingPeriod}
            exclusive
            onChange={handleBillingChange}
            style={{ justifyContent: 'center', display: 'flex', marginBottom: 3, padding: '30px 0' }}
          >
            <ToggleButton value="monthly">Paid monthly</ToggleButton>
            <ToggleButton value="yearly">Paid yearly</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {filteredPlans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card raised sx={{ backgroundColor: '#3b4371', boxShadow: '0 4px 8px rgba(0,0,0,0.1)',borderRadius:"15px",padding:"25px 10px",color:"#fff" }}>
                <CardContent>
                  <Typography variant="h5" component="h2" color="#fff" gutterBottom>
                    {plan.Title} - {plan.name}
                  </Typography>
                  <Typography variant="h6" color="#009e61" gutterBottom>
                    {plan.price} / {plan.period}
                  </Typography>
                  {plan.features.map((feature, idx) => (
                    <Box key={idx} display="flex" alignItems="center" marginBottom={1}>
                      {feature === 'No telegram Access' ? (
                        <Box component="span" style={{ display: 'flex', alignItems: 'center', marginRight: 8 }}>
                          <ClearIcon fontSize="small" color="error" />
                        </Box>
                      ) : (
                        <CheckCircleIcon fontSize="small" style={{ marginRight: 8, color: 'green' }} />
                      )}
                      <Typography variant="body2">{feature}</Typography>
                    </Box>
                  ))}
                </CardContent>
                <Box mt="auto" p={2}>
                  <Button
                    fullWidth
                    variant="contained"
                    
                    sx={{
                      fontWeight: 'bold',
                      background:"#fff",
                      color:"#000",
                      padding:"10px 0",
                      '&:hover': {
                        backgroundColor: '#009e61',
                        color:"#fff"
                      },
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default SubscriptionPage;