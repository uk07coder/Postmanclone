import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from '@mui/material/Button';
import "../tabs.css";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsName = (props) => {
  const [value, setValue] = React.useState(0);
  
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleKey = (e,index) => {
    e.preventDefault();
    
    props.SubPark(e.target.value,index);
  };

  const handleVal = (e,index) => {
    e.preventDefault();
    props.SubParv(e.target.value,index);
  };


  const handlehKey = (e,index) => {
    e.preventDefault();
    props.Subheadk(e.target.value,index);
  };

  const handlehVal = (e,index) => {
    e.preventDefault();
    props.Subheadv(e.target.value,index);
  };
  const handletextarea = (e) => {
    e.preventDefault();

    props.Subtxt(e.target.value);
  };

  return (
    <div className="tabs">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        aria-label="basic tabs example"
      >
        <Tab label="Params" {...a11yProps(0)} />
        <Tab label="Authorization" {...a11yProps(1)} />
        <Tab label="Headers" {...a11yProps(2)} />
        <Tab label="Body" {...a11yProps(3)} />
        <Tab label="Pre-request Script" {...a11yProps(4)} />
        <Tab label="Tests" {...a11yProps(5)} />
        <Tab label="Settings" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography component="span">Query Params</Typography>
        <div className="tbscon">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="tblhead">
              <TableRow>
                
                <TableCell>KEY</TableCell>
                <TableCell align="left">VALUE</TableCell>
                <TableCell align="left">DESCRIPTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.qpar.map((res, index) => {
                return (
                  <TableRow>
                   
                    <TableCell align="left">
                      <TextField
                        placeholder="Key"
                        value={res.key}
                        size="small"
                        onChange={(e) => handleKey(e,index,)}
                      ></TextField>
                    </TableCell>
                    <TableCell align="left">
                      <TextField
                        placeholder="Value"
                        value={res.value}
                        size="small"
                        onChange={(e) => handleVal(e,index)}
                      ></TextField>
                    </TableCell>
                    <TableCell align="left">
                      <TextField
                        placeholder="Description"
                        size="small"
                      ></TextField>
                    </TableCell>
                  </TableRow>
                );
              })}
              <Button sx={{marginTop:1,marginLeft:2,marginBottom:2}} variant="contained" onClick={props.adrow}>Add</Button>
            </TableBody>
          </Table>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
 </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography component="span">Headers</Typography>
        <div className="tbscon">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="tblhead">
              <TableRow>
               
                <TableCell>KEY</TableCell>
                <TableCell align="left">VALUE</TableCell>
                <TableCell align="left">DESCRIPTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.hpar.map((res, index) => {
                return (
                  <TableRow>
                   
                    <TableCell align="left">
                      <TextField
                        placeholder="Key"
                        value={res.key}
                        size="small"
                        onChange={(e) => handlehKey(e,index,)}
                      ></TextField>
                    </TableCell>
                    <TableCell align="left">
                      <TextField
                        placeholder="Value"
                        value={res.value}
                        size="small"
                        onChange={(e) => handlehVal(e,index)}
                      ></TextField>
                    </TableCell>
                    <TableCell align="left">
                      <TextField
                        placeholder="Description"
                        size="small"
                      ></TextField>
                    </TableCell>
                  </TableRow>
                );
              })}
              <Button sx={{marginTop:1,marginLeft:2,marginBottom:2}} variant="contained" onClick={props.adheadrow}>Add</Button>
            </TableBody>
          </Table>
        </div>

      </TabPanel>
      <TabPanel value={value} index={3}>
        Body
        <TextareaAutosize
          aria-label="empty textarea"
          color="inherit"
          onChange={(e) => handletextarea(e)}
          value={props.textarea}
          style={{ width: 772, height: 150 }}
        />
      </TabPanel>
    </div>
  );
};

export default TabsName;
