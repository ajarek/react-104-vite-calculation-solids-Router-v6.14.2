import { useState } from 'react'
import { FormCuboid } from '../../components/FormCuboid/FormCuboid'
import './Pyramid.css'

const Pyramid = () => {
  const [result, setResult] = useState(null)
  const handleSubmit = (data) => {
    const valuesPyramid = {
      width: data.width,
      length: data.length,
      height: data.height,
    }
    setResult(valuesPyramid)
  }
  return (
    <div className='pyramid'>
      <h2>Pyramid</h2>
      <div className='wrapper'>
        <div className='img'>
          <img
            src='/images/ostroslup.png'
            alt=''
          />
        </div>
        <div className='calculations'>
          <FormCuboid onSubmit={handleSubmit} />
        </div>
      </div>
      {result ? (
        <div className='result'>
          <div>V={(result.height * result.width * result.length) / 3}</div>
          <div>
            P=
            {result.length *
              Math.sqrt(
                result.height * result.height +
                  (1 / 4) * result.width * result.width
              ) +
              result.width *
                Math.sqrt(
                  result.height * result.height +
                    (1 / 4) * result.length * result.length
                ) +
              result.width * result.length}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Pyramid
