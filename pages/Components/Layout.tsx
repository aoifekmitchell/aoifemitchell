//  https://nextjs.org/docs/basic-features/layouts

// import Nav from "./Nav"
// import Footer from "./Footer"
import Head from "next/head"
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Children, ReactNode } from "react";
// import '../styles/Homepage.module.css'
import { FC } from "react";

interface LayoutProps {
  children:ReactNode
}

const Layout  = ({children} : LayoutProps)=> {
  return (

    <>
    <div className="wrapper">
        <Head>
          <style>{dom.css()}</style>
        </Head>
        {children}

    </div>
    </>
  )
}

export default Layout

