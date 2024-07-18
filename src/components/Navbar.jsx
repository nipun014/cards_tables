import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>               
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Assignment
                </Typography>
                <Button color="inherit"><Link to={'/'} style={{textDecoration: "none", color:'white'}}>Home</Link></Button>

                <Button color="inherit"><Link to={'/c'} style={{textDecoration: "none", color:'white'}}>Cards</Link></Button>
                <Button color="inherit"><Link to={'/t'} style={{textDecoration: "none", color:'white'}}>Table</Link></Button>
                <Button color="inherit"><Link to={'/new'} style={{textDecoration: "none", color:'white'}}>Add</Link></Button>

                </Toolbar>
            </AppBar>
        </Box>
        
    </div>
  )
}

export default Navbar