"use client"
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Container } from '@mui/material';

// Array of card details to populate the cards
const cardDetails = [
  { title: 'تمويل المشروع',  description: 'قم بتمويل مشاريعك بفعالية.', imageUrl: 'https://web.moxcreative.com/ventuure/wp-content/uploads/sites/20/2023/03/businessman-analyzing-investment-charts-on-the-office-desk-.jpg' },
  { title: 'تمويل المشروع',  description: 'قم بتمويل مشاريعك بفعالية.', imageUrl: 'https://web.moxcreative.com/ventuure/wp-content/uploads/sites/20/2023/03/stock-market-analysis-on-digital-tablet.jpg' },
  { title: 'تمويل المشروع',  description: 'قم بتمويل مشاريعك بفعالية.', imageUrl: 'https://web.moxcreative.com/ventuure/wp-content/uploads/sites/20/2023/03/middle-age-businessmen-after-signing-an-international-deal-at-boardtable-1024x576.jpg' },
  { title: 'تمويل المشروع',  description: 'قم بتمويل مشاريعك بفعالية.', imageUrl: 'https://web.moxcreative.com/ventuure/wp-content/uploads/sites/20/2023/03/real-estate-woman-with-house-model-on-working-desk-for-investment-to-buying-property-1024x536.jpg' },
  { title: 'تمويل المشروع', description: 'قم بتمويل مشاريعك بفعالية.', imageUrl: 'https://web.moxcreative.com/ventuure/wp-content/uploads/sites/20/2023/03/businessman-analyzing-investment-charts-on-the-office-desk-.jpg' },
  { title: 'تمويل المشروع', description: 'قم بتمويل مشاريعك بفعالية.', imageUrl: 'https://web.moxcreative.com/ventuure/wp-content/uploads/sites/20/2023/03/aerial-view-of-oil-and-gas-refining-petrochemical-factory-with-high-refinery-plant-manufacture-1024x683.jpg' },

];
const topSection = {
  heading: 'الصناعات والخدمات',
  subheading: 'نرفع شركتك إلى آفاق جديدة',
  description: 'ماغنيس هاك إفيسيتور نولا موليس ديكتومست بيدي سيم نوسترا كونوبيا مونتيس. سكيليريسكويس فيسيليسي أورناري إنتيجر سوسسيبيت إمبيردييت لوكتوس.',
};

const ProjectItems = () => {
  return (
    <Container  sx={{ flexGrow: 1, paddingTop:'80px',paddingBottom:'1rem' }}>
 <Grid container spacing={5} alignItems="center" justifyContent="center">
       
        <Grid item xs={12} md={6}>
          <Typography variant="body1" color="darkgray" paddingTop='1rem' fontWeight='500'>
            {topSection.description}
          </Typography>
          <Button sx={{background:'linear-gradient(to right, #f3904f, #3b4371)',borderRadius:'5px',fontWeight:'bold',textTransform:'none',color:'#fff',marginTop:'1rem',width:'180px'}} >اكتشف المزيد</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography gutterBottom variant="h4" component="div" style={{fontWeight:'bold',color:'#485563',textTransform:'none'}}>
            {topSection.heading}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" color='text.secondary' fontWeight='600' >
            {topSection.subheading}
          </Typography>
          
        </Grid>
      </Grid>

    <Box sx={{ flexGrow: 1, paddingTop: '50px' }}>
      <Grid container spacing={3}>
        {cardDetails.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{borderRadius:'10px'}}>
              <CardMedia
                component="img"
                height="200"
                image={card.imageUrl}
                alt={card.title}
              />
              <CardContent>
                <Typography sx={{justifyContent:'right',display:'flex'}} gutterBottom variant="h5" component="div" color='#485563' fontWeight={600}>
                  {card.title}
                </Typography>
                <Typography  sx={{justifyContent:'right',display:'flex'}}  variant="body2" color="#485563" fontWeight='500'>
                  {card.description}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'right', padding: 2 }}>
                <Button style={{background:'linear-gradient(to right, #f3904f, #3b4371)',borderRadius:'5px',fontWeight:'500',textTransform:'none',width:'150px'}} size="small"  variant="contained">تعلم المزيد</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default ProjectItems;
