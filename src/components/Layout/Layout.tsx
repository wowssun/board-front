import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import '@/styles/index.css'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <>
        <Header/>
            <main>
                <Outlet/>
            </main>
        <Footer/>
    </>
  )
}

export default Layout