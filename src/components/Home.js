
import React, { useState } from 'react'
import Form from './Form'
import Navbar from './Navbar'
import TabsName from './TabsName'
import TextArea from './TextArea'
import '../main.css'
import History from './History'


const Home = () => {
const [fdata,setfdata]=useState()
const[par,setpar]=useState({key:'',val:''});
const[txt,settxt]=useState();
  const getData=(data)=>{
    setfdata(data);
  }

  const pardatak=(data)=>{
    console.log(data);
    setpar({...par,key:data});
}
const pardatav=(data)=>{
  setpar({...par,val:data});
}
console.log(par);
const txtdata=(e)=>{

  
  settxt(e);
}
  return (
    <>
    
    <Navbar></Navbar>
    <div className='maindiv'>
      <div className='mainside'>
      <div className='headside'><h3>History</h3>
<br></br>
<br></br></div>
      <div className='maininside' >
      

<History></History>
</div>
      </div>
    
    <div className='main'>
    <Form OnSub={getData}  data={par} txtdata={txt}></Form>
    <TabsName SubPark={pardatak} SubParv={pardatav}  Subtxt={txtdata} textarea={txt} qpar={par}></TabsName>
    <TextArea obj={fdata}></TextArea>
    </div>
   
    </div>
    </>
  )
}

export default Home