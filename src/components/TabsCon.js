import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TextField } from '@mui/material';
import '../tabscon.css';


const TabsCon = (props) => {
  const [param,setparam]=React.useState({key:'',val:''});

const handleKey=async(e)=>{

e.preventDefault();
setparam({...param,key:e.target.value});
console.log(e.target.value);
props.SubPar(param);
}

const handleVal=async(e)=>{

  e.preventDefault();
  setparam({...param,val:e.target.value});
  console.log(e.target.value);
  props.SubPar(param);
  }


  return (
    <div className='tbscon'>
 <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='tblhead'>
          <TableRow>
            <TableCell>KEY</TableCell>
            <TableCell align="left">VALUE</TableCell>
            <TableCell align="left">DESCRIPTION</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        <TableRow >
              <TableCell align="left">
              <TextField placeholder='Key' size='small'onChange={(e)=>handleKey(e)}></TextField></TableCell>
              <TableCell align="left"><TextField placeholder='Value' size='small' onChange={(e)=>handleVal(e)}></TextField></TableCell>
              <TableCell align="left"><TextField placeholder='Description' size='small'></TextField></TableCell>
            </TableRow>
        </TableBody>
      </Table>


    </div>
  )
}

export default TabsCon