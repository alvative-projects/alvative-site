import Head from 'next/head'
import GoToTop from '../components/common/GoToTop'
import Faq from '../components/Faq'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Growth from '../components/Growth'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Process from '../components/Process'
import Reviews from '../components/Reviews'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alvative | Hire the best Junior Talent</title>
        <meta name="description" content="Alvative site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/ClashDisplay-Bold.ttf" as='fonts' crossOrigin=''/>
        <link rel="preload" href="/fonts/AvertaDemo-Regular.otf" as='fonts' crossOrigin=''/>
      </Head>
      <main>
       <Header />
       <Hero />
       <Partners />
       <Features />
       {/* <Reviews /> */}
       <Growth />
       <Process />
       <Faq />
       <Footer />
       <GoToTop />
      </main>
    </>
  )
}
