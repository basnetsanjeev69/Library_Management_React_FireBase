import React from 'react'
import Header from './Header'
import Footer from './Footer'

function BaseLayout({children}) {
  return (
    <>
    {/* Header */}
    <Header></Header>
    {/* Main body */}
    <main className='main'>
     {children}
    </main>
    {/* footer */}
    <Footer></Footer>
    </>
  )
}

export default BaseLayout