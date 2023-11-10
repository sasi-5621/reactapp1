import React from 'react'
import { useLocation } from 'react-router-dom'

const Formdata = () => {
const data = useLocation().state.submitteddata;
  return (
    <div>
      <h1>Formdata</h1>
      <p>{data.FistName}</p>
      <p>{data.LastName}</p>
      <p>{data.Email}</p>
    </div>
  )
}

export default Formdata
