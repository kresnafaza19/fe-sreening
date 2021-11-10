import Head from 'next/head'
import HomePage from '../components/HomePage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Slider'

export default function Home() {
  return (
    <div className="justify-center flex flex-col">
      <Head>
        <title>
          FE SCREENING
        </title>
      </Head>
      <Navbar/>
      <Carousel/>
      <HomePage/>
      <Footer/>
    </div>

  )
}
