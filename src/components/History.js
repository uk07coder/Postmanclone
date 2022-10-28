import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "../history.css";

const History = () => {

 if(JSON.parse(localStorage.getItem("url"))!==null)
 {
  let dataurl = JSON.parse(localStorage.getItem("url")).reverse();
  let datatype = JSON.parse(localStorage.getItem("type")).reverse();
 
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="parent">
      <div className="child1">
        <ul>
          {datatype.map((req, index) => {
           
           if(req==='GET'){
            return <li key={index}>{
                <Chip variant="outlined" color="success" label={req} />}</li>
           }
           else if(req==='POST'){

            return <li key={index}>{
                <Chip variant="outlined" color="primary" label={req} />}</li>
           }

return 0;


          })}
        </ul>
      </div>
      <div className="child2">
        <ul>
          <Stack spacing={2.1}>
            {dataurl.map((req, index) => (
              <Item >{req}</Item>
            ))}
          </Stack>
        </ul>
      </div>
    </div>
  );
            }
};

export default History;
