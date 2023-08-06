import { useState } from 'react'
import { FormCone } from '../../components/FormCone/FormCone'
import './Cone.css'

const Cone = () => {
  const [result, setResult] = useState('')
  const handleSubmit = (data) => {
    const valuesCone = {
      radius: data.radius,
      height: data.height,
      forming: data.forming,
    }
    setResult(valuesCone)
  }
  return (
    <div className='cone'>
      <h2>Cone</h2>
      <div className='wrapper'>
        <div className='img'>
          <img
            src='/images/stozek.png'
            alt='cone'
          />
        </div>
        <div className='calculations'>
          <FormCone onSubmit={handleSubmit} />
        </div>
      </div>
      {result ? (
        <div className='result'>
          <div>
            V=
            {Math.pow(result.radius, 2) + Math.pow(result.height, 2) ===
            Math.pow(result.forming, 2)
              ? (Math.PI * Math.pow(result.radius, 2) * result.height) / 3
              : "It's not a cone"}
          </div>
          <div>
            P=
            {Math.pow(result.radius, 2) + Math.pow(result.height, 2) ===
            Math.pow(result.forming, 2)
              ? Math.PI * result.radius * (result.radius + result.forming)
              : "It's not a cone"}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Cone
