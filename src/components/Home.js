import React, { useState } from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import TabsName from "./TabsName";
import TextArea from "./TextArea";
import "../main.css";
import History from "./History";

const Home = () => {
  const [fdata, setfdata] = useState();
 
  const [txt, settxt] = useState();
  const [param, setparam] = React.useState([{key:"",value:"",description:""}]);
  const [header,setheader] = React.useState([]);
  const getData = (data) => {
    setfdata(data);
  };

  const addParamRow=()=>{
    let newpar=[...param,{key:"",value:"",description:""}];
    setparam(newpar);
    console.log("row added="+param)

  }
  const addHeadRow=()=>{
    let newpar=[...header,{key:"",value:"",description:""}];
    setheader(newpar);
    console.log("row added="+header)

  }

  const urlparam=(data)=>{
    let newpar=[...param]

data.forEach((res,index) => {
let k=res.split("=");
console.log(k);

newpar[index]={key:k[0],value:k[1]}
 console.log(param);
});


console.log("new param =",newpar)
setparam(newpar)

  }

  const pardatak = (data,index) => {
    let newpar=[...param]
    newpar[index].key=data;
   setparam(newpar)
  };
  const pardatav = (data,index) => {
    let newpar=[...param]
    newpar[index].value=data;
   setparam(newpar);
  };
  const headk = (data,index) => {
    let newpar=[...header]
    newpar[index].key=data;
   setheader(newpar)
  };
  const headv = (data,index) => {
    let newpar=[...header]
    newpar[index].value=data;
   setheader(newpar);
  };
  console.log("parameters=",param);
  console.log("header=",header);
  const txtdata = (e) => {
    settxt(e);
  };
  return (
    <>
    <div className="maintop"> 
      <Navbar></Navbar>
      <div className="maindiv">
        <div className="mainside">
          <div className="headside">
            <h3>History</h3>
            <br></br>
            <br></br>
          </div>
          <div className="maininside">
            <History></History>
          </div>
        </div>

        <div className="main">
          <Form OnSub={getData} addRow={addParamRow} updateparam={urlparam}pdata={param} hdata={header} txtdata={txt}></Form>
          <TabsName
          adheadrow={addHeadRow}
          hpar={header}
          Subheadk={headk}
          Subheadv={headv}
            SubPark={pardatak}
            SubParv={pardatav}
            Subtxt={txtdata}
            textarea={txt}
            qpar={param}
            adrow={addParamRow}
          ></TabsName>
          <TextArea obj={fdata}></TextArea>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
