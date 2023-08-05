import CardHome from '../../components/CardHome/CardHome'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='wrapper'>
        <CardHome
          nameSolids={'Sphere'}
          srcSolids={'/images/kula.png'}
          linkSolids={'sphere'}
        />
        <CardHome
          nameSolids={'Cuboid'}
          srcSolids={'/images/prostopadloscian.png'}
          linkSolids={'cuboid'}
        />
        <CardHome
          nameSolids={'Cylinder'}
          srcSolids={'/images/walec.png'}
          linkSolids={'cylinder'}
        />
        <CardHome
          nameSolids={'Cone'}
          srcSolids={'/images/stozek.png'}
          linkSolids={'Cone'}
        />
        <CardHome
          nameSolids={'Pyramid'}
          srcSolids={'/images/ostroslup.png'}
          linkSolids={'pyramid'}
        />
      </div>
    </div>
  )
}

export default Home
