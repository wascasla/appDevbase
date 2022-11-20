import React from 'react'
import NavBar from './NavBar'

const Layout = ({goToBack, setGoToBack,children}) => {
  return (
    <>
        <NavBar goToBack={goToBack} setGoToBack={setGoToBack} />
        {children}
    </>
  )
}

export default Layout