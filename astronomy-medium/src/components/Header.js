import { Grid, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/CWRU_Acronym-logo-brand.jpg'


export const Header = () => {

  return (
    <div style={{backgroundColor: "#003071", height: "8vh", width: "100vw"}}>
        <Grid container style={{position:'relative', top:'20%'}} >
            <Grid item md={5}>
                <img src={logo} style={{maxHeight:'5vh', marginLeft:'1vh'}}/>
            </Grid>
            <Grid item md={7}>
                <Typography variant='h4' sx={{color:'white'}}>SPARC DATASET</Typography>
            </Grid>
        </Grid>
    </div>
  )
}
