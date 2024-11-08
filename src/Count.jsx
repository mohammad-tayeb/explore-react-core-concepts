import { useState } from "react"

export  default function Counter(){
    const [count, setCount] = useState(0);
    function handleAdd(){
        const newCount = count + 1;
        setCount(newCount);
    }

    function handleRemove(){
        const newHandle = count-1;
        setCount(newHandle);
    }

    return (
        <div style={{border:'5px solid orange'}}>
            <h3>Counter: {count} </h3>
            <button onClick={handleAdd} style={{marginInlineEnd:'50px'}}> Count++ </button>
            <button onClick={handleRemove}> Count-- </button>
        </div>
    )
}