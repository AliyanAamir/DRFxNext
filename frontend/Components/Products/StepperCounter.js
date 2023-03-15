import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count>0){
        setCount(count - 1);
    }
    else{
        alert('Quantity cannot be negative')

    }
    
  };

  return (
    <div className='mt-3 border border-2 d-flex align-items-center justify-content-center me-3' style={{maxWidth:'10rem',height:'3.5rem'}}>
      <button className='btn btn-sm me-4 ' style={{color:'lightgray', fontSize:'1.5rem',border:'0px'}} onClick={decrement}>-</button>
      <span className='fw-bold'>{count}</span>
      <button className='btn btn-sm ms-4' onClick={increment} style={{color:'lightgray', fontSize:'1.5rem',border:'0px'}} >+</button>
    </div>
  );
}