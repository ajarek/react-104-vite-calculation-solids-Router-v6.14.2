import './CardHome.css'
import { Link } from 'react-router-dom'

const CardHome = ({ nameSolids, srcSolids, linkSolids }) => {
  return (
    <Link
      to={linkSolids}
      className='card-solids'
    >
      <h3>{nameSolids}</h3>
      <div className='img'>
        <img
          src={srcSolids}
          alt={nameSolids}
        />
      </div>
    </Link>
  )
}

export default CardHome
