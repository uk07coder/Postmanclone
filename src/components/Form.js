import * as React from "react";

import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "../Form.css";
import apicall from "../apicall";

const Form = (props) => {
  const [req, setreq] = React.useState("");
  const[url,seturl]=React.useState("");
  const handleUrl=(e)=>{

    seturl(e.target.value);
    console.log(url);
  }
  const handleChange = (event) => {
    setreq(event.target.value);
    console.log(req);
  };

 
  const handleClick=async(e)=>{
    e.preventDefault();


    let oldtype;
    let oldurl;
    if(localStorage.length!==0)
    {
     oldtype=JSON.parse(localStorage.getItem('type'))
     oldurl=JSON.parse(localStorage.getItem('url'))
     localStorage.setItem('type', JSON.stringify([...oldtype,req]));
    localStorage.setItem('url', JSON.stringify([...oldurl,url]));
    }
    else{
      console.log("runninng")
    localStorage.setItem('type', JSON.stringify([req]));
    localStorage.setItem('url', JSON.stringify([url]));
    }

    console.log(props.txtdata+"Data sended ")
    let response= await apicall(req,url,props.data,props.txtdata);
    console.log(response);
    props.OnSub(response);

  }
  return (
    <div className="form">
        <Select
        className="select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={req}
          label=""
          onChange={(e)=>handleChange(e)}
        >
          <MenuItem value={"GET"}>GET</MenuItem>
          <MenuItem value={"POST"}>POST</MenuItem>
        </Select>

        <TextField size="small" className='formtxt'  label="URL" value={url} onChange={(e)=>handleUrl(e)}   />
        <Button className="formbtn" variant="contained"  onClick={(e)=>handleClick(e)}>Send</Button>
    </div>
  );
};

export default Form;
