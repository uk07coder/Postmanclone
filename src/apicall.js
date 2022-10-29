import axios from 'axios';


const apicall = async(type,url,pdata,hdata,txtdata) => {
   console.log(txtdata);
console.log(type,url);


let newpdata=pdata.map(item=>({[item.key]:item.value}));
let newpobj=Object.assign({},...newpdata);
console.log(newpobj);


let newhdata=hdata.map(item=>({[item.key]:item.value}));
let newhobj=Object.assign({},...newhdata);
console.log(newhobj);





let response;
let body={};

if(txtdata!==undefined)
{
       body=JSON.parse(txtdata);
}


const params = new URLSearchParams(newpobj).toString();

 console.log(params);
const finalurl=url.split("?");
const urll=finalurl[0]+"?"+params;
console.log(urll);
let bodydata=JSON.stringify({
       "url":urll,
       "type":type,
       "header":newhobj,
       "bdy":body
 })
 console.log(bodydata);
await axios({
   method:"post",
   url:"http://localhost:4000",
   headers:{
       
       'Content-Type': 'application/json'
   },
   data:bodydata
 }).then((res)=>{
        response=res.data;
       
console.log(response)
       })




// if(type==='GET')
// {
//    await axios.get(url).then((res)=>{
//     response=res.data;

//    })
// }


//  if(type==='POST')
// {
//    await axios.post(url,{params:{
//    key:valu,   
//    }
     
//    }).then((res)=>{
//       response=res.data
//       console.log("running");
//    })
// }
console.log(JSON.stringify(response))
 return response;

}

export default apicall