import axios from 'axios';


const apicall = async(type,url,d,txtdata) => {
   console.log(txtdata);
console.log(type,url);
let response;
let k=d.key;
let valu=d.val;
let body={};
if(txtdata!==undefined)
{
       body=JSON.parse(txtdata);
}

console.log(valu);
const params = new URLSearchParams({
[k]:valu,
 }).toString();

const urll=url+"?"+params;
console.log(urll);
await axios({
   method:type,
   url: urll,
   headers:{},
   data:body
 }).then((res)=>{
        response=res.data;
       

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