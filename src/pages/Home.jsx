import Banner from '../components/Banner.jsx'
import UsefulNum from '../components/UsefulNum'
import Prevention from '../components/Prevention'
import LatestNews from '../components/LatestNews'
import News from '../components/News'
import Sindicato from '../components/Sindicato'
import { Flowbite } from 'flowbite-react'

function Home() {
  return (
    <>
      <Banner/>
      <LatestNews/>
      <UsefulNum />
      <Prevention/>
      <News/>
      <Sindicato/>
    </>
  )
}

export default Home