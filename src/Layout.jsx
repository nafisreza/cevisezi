import React from 'react'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import CookieConsent, { Cookies } from "react-cookie-consent";


const Layout = ({children}) => {
  return (
    <>
        <CookieConsent
  location="bottom"
  buttonText="Sure man!!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
</CookieConsent>
        
          <NavBar/>
                  

        <main>
            {children}
        </main>

        
          <Footer />
        
        
    </>
  )
}

export default Layout
