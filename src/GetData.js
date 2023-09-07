import { useEffect, useState } from "react";

export default function GetData() {
    const [data, SetData] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [closeBox, setCloseBox] = useState(false);

    const increment = () => {
        SetData(data + 1);
    }
    const decrement = () => {
        SetData(data - 1);

    }
    const toggleSwitch = () => {
        setIsOn(!isOn);
    }
    const close = () => {
        setCloseBox(!closeBox);
    }
    const fetchData = (param1,param2) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              var result = param1+param2;

                resolve(result);

            }, 2000);
        })

    }

    const addThreeNumbers=(a,b,c)=>{
        return new Promise((resolve, reject) => {
          setTimeout(()=>{
            var result = a+b+c;
            resolve(result);
          },3000);  
        })};
      useEffect(()=>{
addThreeNumbers(1,2,3).then((result)=>{
    console.log(result);
})
      },[]) 
        
    

    useEffect(() => {
        fetchData("kavita","pandey").then((result) => {
            console.log(result);
        })
        console.log(addThreeNumbers(1,2,3));
    }, [])
    


     return (<div>
      
 

        <h1>GetData</h1>
        <p>data:{data}</p>
        <button onClick={increment} >increment</button>
        <button onClick={decrement} >decrement</button>
        <h2>toggleSwitch</h2>
        <p>Switch is {isOn ? 'on' : 'off'}</p>

        <button onClick={toggleSwitch}>toggle</button>
        <button onClick={() => { close() }}>Open</button>
        {
            closeBox ? <div className="box1" onClick={() => { close() }}>
                <p>hello kavita how are u  </p>
                <span><button onClick={() => { close() }}>x</button>
                </span>
            </div> : null
        }

    </div>
    )
}