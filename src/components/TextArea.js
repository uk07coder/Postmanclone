import React from 'react'

import '../textarea.css';
import ReactJson from 'react-json-view'
import Typography from '@mui/material/Typography';

const TextArea = (props) => {
  
  return (
    <div className='txthead'>
      <Typography>Response</Typography>
    <div className='txtarea'>
   <ReactJson src={props.obj} />  
{/* <TextareaAutosize
  aria-label="empty textarea"
  placeholder="Response"
  value={JSON.stringify(props.obj)}
  style={{ width: 772,height:200 }}
/> */}
</div>
</div>
  )
}

export default TextArea