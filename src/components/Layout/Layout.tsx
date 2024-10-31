import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import '@/styles/index.css'

const Layout = (props : {children : React.ReactNode}) => {
  return (
    <>
        <Header/>
            <main>
                {props.children}
            </main>
        <Footer/>
    </>
  )
}

export default Layout