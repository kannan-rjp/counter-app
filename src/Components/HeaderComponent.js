import { useState } from "react";
export default function HeaderComponent() {
    const [numbers, setNumbers] = useState([]);
    const [value, setValue] = useState(0);
    function increMent() {
        setValue(value+1); 
        setNumbers([...numbers,value]);
        console.log(numbers,'The numbers are..')   
    }
    function decreMent() {
        if (value !== 0) {
            setValue(value - 1)
              
        }
    }
    return (
        <>
            <div>
                <h1>Counter Task</h1>
                <button onClick={increMent}>+</button>
                <p>{value}</p>
                <button onClick={decreMent}>-</button>
            </div>
            <div className="sub-container" style={{ display: "flex", flexDirection: 'row', gap: '20px',marginTop:'10px'}}>
                <div>
                    {numbers.length !==0 ? <h3>Odd Numbers</h3>:""}
                    <ul>{numbers.filter((val)=>val%2 !==0 ).map((val)=>(<li>{val}</li>))}</ul>
                </div>
                <div>
                    {numbers.length !==0 ? <h3>Even Numbers</h3>:""}
                    <ul>{numbers.filter((val)=>val%2 ==0 ).map((val)=>(<li>{val}</li>))}</ul>
                </div>
                <div>
                    {numbers.length !==0 ? <h3>Square Numbers</h3>:""}
                    <ul>{numbers.filter((val)=> Number.isInteger(Math.sqrt(val))).map((val)=>(<li>{val}</li>))}</ul>
                    
                </div>
            </div>
        </>
    );
}