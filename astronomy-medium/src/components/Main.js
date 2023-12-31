import React from 'react'
import { useState } from 'react';
import { Grid, TableCell, TableContainer, Modal, Typography, Box, Button, typographyClasses } from '@mui/material';
import { Select, MenuItem } from '@mui/material';
import MUIDataTable from "mui-datatables";
import data from '../data/sparc'
import moreSparcData from '../data/moreSparc'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Graph } from './Graph';

export const Main = ({apodImage}) => {
  // console.log({apodImage});
  // console.log(data);
  const columns = ["Galaxy Name", "Hubble Type", "Distance", "Mean error on D", "Incliniation", "Distance Method", "Mean error on Inc", "Total Luminosity", "Mean error", "Eff Radius", "Eff surface brightness", "Disk Scale Length", "Disk Central surface brightness", "Total TI mass", "HI radius", "Asymptotically Flat Rotation Velocity", "mean error on Vflat", "Quality Flag", "References for HI and HA data"];
  const [selected, setSelected] = useState([]);
  const [galaxyData, setGalaxyData] = useState([]);

  const handleRowCheck = (rowSelected, rowList) => {
    const list = [];
    rowList.forEach(row => {
      list.push(row['index']);
    })
    setSelected(list);

    const selectedGalSets = [];
    
    list.forEach(galaxy => {
      // for each galaxy in the galaxy selected list
      const gal = data[galaxy][0];
      // the galaxy information is found, name is indexxed and printed

      const galSets = []
      moreSparcData.forEach(subData => {
        //goes through the secondary list to find the actual list
        if(subData[0] === gal)
          galSets.push(subData);
      })

      selectedGalSets.push(galSets);
      // selectedGalSets will have all the graphing data 
      // structered as [ [galazy 1[][][][]] , [galaxy 2 [][][][]], ... ]
      setGalaxyData(selectedGalSets);
    })
    // console.log(selectedGalSets);
    if(galaxyData.length > 1){
      setCheck([]);
    }
    if(galaxyData.length == 1){
      setRadio(0);
    }
  } 

  const options = {
    filterType: 'checkbox',
    onRowSelectionChange: handleRowCheck,
  };
  const filters = [">", ">=", "<", "<=", "=", "range"];


  const [radio, setRadio] = useState('');
  const onChange = (event) => {
    // console.log(event.target.value);
    setRadio(event.target.value);
  }

  const [check, setCheck] = useState([]);
  // const onChangeCheck = (event) => {
  //   // console.log(event.target.checked);
  //   var c1 = check;
  //   if(event.target.checked){
  //     c1.push(event.target.value);
  //   }
  //   else{
  //     c1.splice(c1.indexOf(event.target.value), 1);
  //   }
  //   setCheck(c1);
  //   console.log(check);
  // }

  const onChangeCheck = (event) => {
    var c1 = Object.values(check);
    if(event.target.checked){
      c1.push(event.target.value);
      setCheck(c1);
    }
    else{
      c1.splice(check.indexOf(event.target.value), 1)
      setCheck(c1);
    }
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };


  return (
    // <div style={{margin:'20px'}}>
    //   {apodImage != null && (
    //     <img src={apodImage} style={{maxHeight:'500px', maxWidth:'500px', height:'auto', width:'auto'}}></img>
    //   )}
    // </div>
    <div style={{marginLeft: '25px', marginRight: '25px'}}>
      <MUIDataTable
        title={"SPARC DATASET"}
        data={data}
        columns={columns}
        options={options}
        style={{marginBottom: '5px', paddingBottom: '1rem'}}
      />

      <div style={{height:'3em'}}/>

      {/* <Button onClick={handleOpen}>Add filters</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Filters
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Select the filters you would like to add
          </Typography>
          <Select>
            {columns.map(column => (
              <MenuItem value={column}>{column}</MenuItem>
            ))}
          </Select>
          <Select>
            {filters.map(filter => (
              <MenuItem value={filter}>{filter}</MenuItem>
            ))}
          </Select>
        </Box>
      </Modal> */}

      {(galaxyData.length > 1) && (
      <Box>
        <h2>Compare parameters from multiple galaxies</h2>
        <input type="radio" id="radio1" name="graph" onChange={onChange} value="1" />
        <label for="radio1">Assumed distance</label>
        <input type="radio" id="radio3" name="graph" onChange={onChange} value="3" />
        <label for="radio3">Observed circular velocity</label>
        <input type="radio" id="radio5" name="graph" onChange={onChange} value="5" />
        <label for="radio5">Gas velocity contribution</label>
        <input type="radio" id="radio6" name="graph" onChange={onChange} value="6" />
        <label for="radio6">Disk velocity contribution</label>
        <input type="radio" id="radio7" name="graph" onChange={onChange} value="7" />
        <label for="radio7">Bulge velocity contribution</label>
        <input type="radio" id="radio8" name="graph" onChange={onChange} value="8" />
        <label for="radio8">Disk surface brightness</label>
        <input type="radio" id="radio9" name="graph" onChange={onChange} value="9" />
        <label for="radio9">Bulge surface brightness</label>
      </Box>
      )}

      {(galaxyData.length == 1) && (
        <Box>
          <h2>Graph individual galaxy data parameters</h2>
        <input type="checkbox" id="checkbox1" name="graph" onChange={onChangeCheck} value="1" />
        <label for="checkbox1">Assumed distance</label>
        <input type="checkbox" id="checkbox3" name="graph" onChange={onChangeCheck} value="3" />
        <label for="checkbox3">Observed circular velocity</label>
        <input type="checkbox" id="checkbox5" name="graph" onChange={onChangeCheck} value="5" />
        <label for="checkbox5">Gas velocity contribution</label>
        <input type="checkbox" id="checkbox6" name="graph" onChange={onChangeCheck} value="6" />
        <label for="checkbox6">Disk velocity contribution</label>
        <input type="checkbox" id="checkbox7" name="graph" onChange={onChangeCheck} value="7" />
        <label for="checkbox7">Bulge velocity contribution</label>
        <input type="checkbox" id="checkbox8" name="graph" onChange={onChangeCheck} value="8" />
        <label for="checkbox8">Disk surface brightness</label>
        <input type="checkbox" id="checkbox9" name="graph" onChange={onChangeCheck} value="9" />
        <label for="checkbox9">Bulge surface brightness</label>
      </Box>
      )}
      {/* <Graph dataSets={galaxyData} graphRadio={radio} graphCheck={check}/> */}
      {/* {(radio > 0) &&
        <Graph dataSets={galaxyData} graphRadio={radio}/>
      } */}
      <Graph dataSets={galaxyData} graphCheck={check} graphRadio={radio} />
      

    </div>
  )
}
