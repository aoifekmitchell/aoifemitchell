//  import global  css
import "./styles/globals.css";
// import layout  components form components folder
import Layout from "./Components/Layout";
import next from "next";
// import { Component } from "react";
import { AppProps } from "next/app";
// import Navigation bar 
import Navbar from "./Components/Navbar"

//  https://stackoverflow.com/questions/64722812/what-typescript-type-should-nextjs-app-tsx-component-and-pageprops-be
export default function MyApp({ Component , pageProps  }: AppProps) {
return (
   
   <Layout>
       <Navbar />
       <Component {...pageProps} />
   </Layout>
);}









