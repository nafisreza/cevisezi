import React from 'react'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import CookieConsent, { Cookies } from "react-cookie-consent";


const Layout = ({children}) => {
  return (
    <>
        <CookieConsent
  location="bottom"
  buttonText="Accept"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2e1065" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
Pentru a va oferi rezultate personalizate folosim module cookie. Află in sectiunea <a href="/utilizare-cookie">Politica de Cookies</a> mai multe despre cookie-uri, inclusiv despre posibilitatea retragerii acordului.{" "}
  <span style={{ fontSize: "10px" }}></span>
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
