import React from 'react'
import Header from './header'

const Layout = ({children}) => {
  return (
    <>
        <Header />
        <div style={{overflowY:"scroll", height:"100vh",  }}>
        {children}
        </div>
    </>
  )
}

export default Layout