import { useState } from "react"

export default function Counter(){
const [count, setCount] = useState(0);
    return(
        <>
        <div className="counterWrapper">
            <p>{count}</p>
            <button onClick={() => {setCount(count = 0)}}>Add</button>
            <button onClick={() => {setCount(count + 1)}}>Add</button>
            <button onClick={() => {setCount(count - 1)}}>Delite</button>
        </div>
        </>
    )
}