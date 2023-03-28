import { useEffect, useState } from "react";
import ListNumbers from "./ListNumbers";

export default function CounterApp() {
    const [numbers, setNumbers] = useState([]);
    const [count, setCount] = useState(0);
 
    
    function decrementNumber() {
        if (count > 0) {
            setCount(count - 1)
              
        }
    }
    // useEffect(()=>{
    //     console.log('The current value is..',count);
    //     setNumbers([...numbers,count]);
    //     console.log('numbers array',numbers)
    // },[count])
    const oddNumArr = numbers.filter((val)=>val%2 !==0 );
    //console.log(oddNumArr)
    const evenNumArr = numbers.filter((val)=>val%2 ===0 );
    const squareNumArr = numbers.filter((val)=> Number.isInteger(Math.sqrt(val)));
    
    return (
        <>
            <div>

                <h1>Counter Task</h1>
                <button onClick={()=>{
                    if(count>=0){
                        setCount(prev => prev+1); 
                        console.log(count,'...,,...')
                        setNumbers([...numbers,count+1]);
                        console.log(numbers,'...numbers....') 
                        }
                }}>+</button>
                <p>{count}</p>
                <button onClick={decrementNumber}>-</button>
            </div>
            <div className="sub-container" style={{ display: "flex", flexDirection: 'row',justifyContent:'center', gap: '20px',marginTop:'10px'}}>
                <div>
                    <ListNumbers title='Odd Numbers' numArr={oddNumArr} />
                </div>
                <div>
                    <ListNumbers title='Even Numbers' numArr={evenNumArr} />
                </div>
                <div>
                    <ListNumbers title='Square Numbers' numArr={squareNumArr} />
                    
                </div>
            </div>
        </>
    );
}