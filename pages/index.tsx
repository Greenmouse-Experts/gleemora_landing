import {useEffect} from 'react'
import { Inter } from 'next/font/google'
import { AppPage } from '@/shared/components/layouts/Types'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '@/shared/components/landing/homepage/HeroSection';
import Figures from '@/shared/components/landing/homepage/Figures';
import Experiences from '@/shared/components/landing/homepage/Experiences';
import Drawing from '@/shared/components/landing/homepage/Drawing';
import Didyouknow from '@/shared/components/landing/homepage/Didyouknow';

const inter = Inter({ subsets: ['latin'] })

const HomePage:AppPage = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <>
      <HeroSection/>
      <Figures/>
      <Experiences/>
      <Drawing/>
      <Didyouknow/>
    </>
  )
}
export default HomePage
HomePage.Layout = 'Home'
