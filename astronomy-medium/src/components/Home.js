import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import { Button, Typography, Container, Grid } from '@mui/material';
import {useState} from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Main } from './Main';

const Home = () => {
  const [apod, setApod] = useState(null);

  React.useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=' + process.env.REACT_APP_NASA_API_KEY)
    // .then(results => setApod(results['url']))
    .then(results => {
      return results.json();
    })
    .then((photoData) => {
      setApod(photoData['url']);
    })

  }, [])

  return (
    <div id='main' name='container' style={{height:"100vh", width:"100vw", backgroundColor:'#D3D3D3'}}>
      <Header />
        <Grid container>
          {/* <Grid item md={3} style={{backgroundColor:'D3D3D3', height:'92vh'}}>
            <Sidebar />
          </Grid> */}
          <Grid item md={12} style={{backgroundColor:'white', height:'92vh'}}>
            <Main apodImage={apod}/>
          </Grid>
        </Grid>
    </div>
  )
}

export default Home;
