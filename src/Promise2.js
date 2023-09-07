import { useEffect,useState } from "react";

export default function Promise2() {
const [data,setData]=useState();
    const MyData = (a,b,c) => {
        return new Promise((resolve, reject) => {
            const add = a + b + c;
            resolve(add);
        })

    }
MyData(2,3,3).then((result)=>{
    console.log(result)
})
useEffect(()=>{
async function main(){
   var value =  await MyData(2,3,3);
setData(value);
}
main();
},[])






    return (
        <div>promise
           
{data}
        </div>
    )
}