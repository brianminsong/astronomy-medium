import { Grid, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/220th_sm_oRVZ7Zu51bf51wtD.png'
import logo2 from '../assets/SPARCcooltext1.png'


export const Header = () => {

  return (
    <div style={{backgroundColor: "#003071", height: "8vh", width: "100vw"}}>
        <Grid container style={{position:'relative', top:'20%'}} >
            <Grid item md={5}>
                <img src={logo2} style={{maxHeight:'5vh', marginLeft:'4vh'}}/>
            </Grid>
            <Grid item md={6}>
                <Typography variant='h4' sx={{color:'white'}}>SPARC NET</Typography>
            </Grid>
            <Grid item md={1}>
              <img src={logo} style={{maxHeight:'5vh', justifyContent:'right'}}/>
            </Grid>
        </Grid>
    </div>
  )
}
