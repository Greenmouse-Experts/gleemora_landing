import React, { PropsWithChildren } from 'react'
import Header from './sections/homepage/Header'
import Footer from './sections/homepage/Footer'

const HomeLayout = ({children}: PropsWithChildren) => {
  return (
    <>
      <div>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

export default HomeLayout