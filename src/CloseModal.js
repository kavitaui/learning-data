
import { useState } from "react";

export default function CloseModal() {
    const [modal, setModal] = useState(false);
    const close = () => {
        setModal(!modal)
    }
    return (


       <div> <button onClick={() => { close() }}>clickMe</button>
           
        {modal ? <div className="box1" onClick={() => { close() }}>
         <p>hell world !</p><span><button onClick={() => {close() }}>x</button></span>
        </div> : null
    }</div>
    )
}
