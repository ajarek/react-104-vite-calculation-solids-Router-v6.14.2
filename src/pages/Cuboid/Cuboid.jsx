import { useState } from 'react'
import { FormCuboid } from '../../components/FormCuboid/FormCuboid'
import './Cuboid.css'

const Cuboid = () => {
  const [result, setResult] = useState(null)
  const handleSubmit = (data) => {
    const valuesCuboid = {
      width: data.width,
      length: data.length,
      height: data.height,
    }
    setResult(valuesCuboid)
  }
  return (
    <div className='cuboid'>
      <h2>Cuboid</h2>
      <div className='wrapper'>
        <div className='img'>
          <img
            src='/images/prostopadloscian.png'
            alt=''
          />
        </div>
        <div className='calculations'>
          <FormCuboid onSubmit={handleSubmit} />
        </div>
      </div>
      {result ? (
        <div className='result'>
          <div>V={result.height * result.width * result.length}</div>
          <div>
            P=
            {2 *
              (result.height * result.width +
                result.height * result.length +
                result.width * result.length)}
          </div>
          <div>
            d=
            {Math.pow(
              Math.pow(result.height, 2) +
                Math.pow(result.length, 2) +
                Math.pow(result.width, 2),
              0.5
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Cuboid
