
import React, {useState} from "react"

const Day = () => {
    const[input,setInputvalue] = useState("")
    const handleChange = (e) => setInputvalue(e.target.value);
    console.log(input)
  return (
    <div>
    <input type="text" value={input} onChange={handleChange}/>
    <p>search :{input} </p>
    </div>
  )
}

export default Day
