import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios, { Axios } from 'axios'
import { TableBody } from '@mui/material';

const Hw = () => {
    var[output,setOutput] = useState([])
    useEffect(()=>{
        //imported from axios itself
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res);
            setOutput(res.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

  return (
    <TableContainer >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell style={{color:"red",fontFamily:"fantasy",fontSize:"30px"}}>Title</TableCell>
            <TableCell style={{color:"violet",fontFamily:"fantasy",fontSize:"30px"}}>Price</TableCell>
            <TableCell style={{color:"pink",fontFamily:"fantasy",fontSize:"30px"}}>Category</TableCell>
            <TableCell style={{color:"yello",fontFamily:"fantasy",fontSize:"30px"}}>Image</TableCell>

            </TableRow>
            </TableHead>
            <TableBody>
                {output.map((val,i)=>{
                    return(
                        <TableRow key={i}>
                            <TableCell>{val.title}</TableCell>
                            <TableCell>{val.price}</TableCell>
                            <TableCell>{val.category}</TableCell>
                            <TableCell sx={{height:'10px', width:'10px'}}>
                               <img src={val.image} alt={val.title} style={{ height: '50px', width: '50px' }} />
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
            
        
       
      </Table>
    </TableContainer>
  );
}
export default Hw