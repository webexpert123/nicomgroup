import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './components/header'
import Banner from './components/banner'
import Home2 from './components/home2'
import Home3 from './components/home3'
import Home4 from './components/home4'
import Contact from './components/contact'
import Footer from './components/footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Home2 />
      <Home3 />
      <Home4 />
      <Contact />
      <Footer />
    </>
  )
}
