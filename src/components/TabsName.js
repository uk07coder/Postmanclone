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

  const handleKey = (e) => {
    e.preventDefault();
    props.SubPark(e.target.value);
  };

  const handleVal = (e) => {
    e.preventDefault();
    props.SubParv(e.target.value);
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
              <TableRow>
                <TableCell align="left">
                  <TextField
                    placeholder="Key"
                    size="small"
                    onChange={(e) => handleKey(e)}
                  ></TextField>
                </TableCell>
                <TableCell align="left">
                  <TextField
                    placeholder="Value"
                    size="small"
                    onChange={(e) => handleVal(e)}
                  ></TextField>
                </TableCell>
                <TableCell align="left">
                  <TextField placeholder="Description" size="small"></TextField>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
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
