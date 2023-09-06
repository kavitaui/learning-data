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
    debugger;

    return (
        <div>
            <h1>GetData</h1>
            <p>data:{data}</p>
            <button onClick={increment} >increment</button>
            <button onClick={decrement} >decrement</button>
            <h2>toggleSwitch</h2>
            <p>Switch is {isOn ? 'on' : 'off'}</p>

            <button onClick={toggleSwitch}>toggle</button>
            <button onClick={() => { close() }}>Open</button>
            {
            closeBox ? <div className="box1" onClick={()=>{close()}}>
                             <p>hello kavita how are u  </p>
                             <span><button onClick={() => { close() }}>x</button>
                             </span>
                        </div>:null
        }
        </div>
    )
}