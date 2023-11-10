import React,{useEffect, useState} from 'react'

const Today = () => {
        const[count,setcount] = useState(0)
    console.log("clicked count"+ count);
    useEffect(() => console.log('clicked'))
    const increment = () =>{
        setcount(count-1)}

    
  return (
    <div>





      
      <button>click</button>
      <h2>clicked count {count}</h2>
      <button onClick={increment}>-</button>
      <button onClick={() => setcount(count+1)}>+ </button>
    </div>
  )
}

export default Today
