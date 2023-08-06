import { useState } from 'react'
import { FormCylinder } from '../../components/FormCylinder/FormCylinder'
import './Cylinder.css'

const Cylinder = () => {
  const [result, setResult] = useState('')
  const handleSubmit = (data) => {
    const valuesCylinder = {
      radius: data.radius,
      height: data.height,
    }
    setResult(valuesCylinder)
  }
  return (
    <div className='cylinder'>
      <h2>Cylinder</h2>
      <div className='wrapper'>
        <div className='img'>
          <img
            src='/images/walec.png'
            alt=''
          />
        </div>
        <div className='calculations'>
          <FormCylinder onSubmit={handleSubmit} />
        </div>
      </div>
      {result ? (
        <div className='result'>
          <div>V={Math.PI * Math.pow(result.radius, 2) * result.height}</div>
          <div>
            P={2 * Math.PI * result.radius * (result.radius + result.height)}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Cylinder
