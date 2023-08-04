import { useState } from 'react'
import {FormSphere} from '../../components/FormSphere/FormSphere'
import './Sphere.css'

const Sphere = () => {
  const[result,setResult]=useState('')
  const handleSubmit=(data)=>{
   setResult(data.radius)
  }
  return (
    <div className='ball'>
     <h2>Sphere</h2>
     <div className="wrapper">
      <div className="img">
     <img src="/images/kula.png" alt="" />
      </div>
      <div className="calculations">
         <FormSphere onSubmit={handleSubmit}/>
      </div>
     </div>
     {result?
     <div className='result'>
     <div>V={4/3*Math.PI*Math.pow(result,3)}</div>
     <div>P={4*Math.PI*Math.pow(result,2)}</div>
     </div>
     :null}
    </div>
  )
}

export default Sphere
