import { AppBar, Box } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = ({goToBack}) => {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{height: '3rem'}} position="static">
        { goToBack && 
            <Link to={'/'}>{'<'}</Link>        
        }
        <div style={{margin: 'auto'}}>Home</div>
      </AppBar>
    </Box>
  )
}

export default NavBar