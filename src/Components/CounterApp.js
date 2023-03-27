import { useState } from "react";
import CheckNumber from "./CheckNumber";

export default function CounterApp() {
    const [numbers, setNumbers] = useState([]);
    const [count, setCount] = useState(0);
    function incrementNumber() {
        if(count>=0){
        setCount(count+1); 
        console.log('The current count value is ...'+count)
        setNumbers([...numbers,count]);
        console.log(numbers,'The numbers are..')   
        }
    }
    function decrementNumber() {
        if (count > 0) {
            setCount(count - 1)
              
        }
    }
    const oddNumArr = numbers.filter((val)=>val%2 !==0 );
    const evenNumArr = numbers.filter((val)=>val%2 ===0 );
    const squareNumArr = numbers.filter((val)=> Number.isInteger(Math.sqrt(val)));
    
    return (
        <>
            <div>

                <h1>Counter Task</h1>
                <button onClick={incrementNumber}>+</button>
                <p>{count}</p>
                <button onClick={decrementNumber}>-</button>
            </div>
            <div className="sub-container" style={{ display: "flex", flexDirection: 'row',justifyContent:'center', gap: '20px',marginTop:'10px'}}>
                <div>
                    <CheckNumber title='Odd Numbers' numArr={oddNumArr} />
                </div>
                <div>
                    <CheckNumber title='Even Numbers' numArr={evenNumArr} />
                </div>
                <div>
                    <CheckNumber title='Square Numbers' numArr={squareNumArr} />
                    
                </div>
            </div>
        </>
    );
}