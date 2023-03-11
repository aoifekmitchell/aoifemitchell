//  https://nextjs.org/docs/basic-features/layouts

import Head from "next/head"
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { ReactNode } from "react";

interface LayoutProps {
  children:ReactNode
}

const Layout  = ({children} : LayoutProps)=> {
  return (

    <>
    <div className="wrapper">
        <div className="main_container">
            <Head>
              <style>{dom.css()}</style>
            </Head>
            {children}
        </div>
    </div>
    </>
  )
}

export default Layout

