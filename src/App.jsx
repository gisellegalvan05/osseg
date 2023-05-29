import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import UsefulNum from './components/UsefulNum'
import Prevention from './components/Prevention'
import LatestNews from './components/LatestNews'
import Footer from './components/Footer'
import News from './components/News'
import Sindicato from './components/Sindicato'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <LatestNews/>
      <UsefulNum />
      <Prevention/>
      <News/>
      <Sindicato/>
      <Footer/>
    </>
  )
}

export default App
