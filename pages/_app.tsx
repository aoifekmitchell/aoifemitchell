//  import global  css
import "./styles/globals.css";
// import layout  components from components folder
import Layout from "./Components/Layout";
// import { Component } from "react";
import { AppProps } from "next/app";
// import Navigation bar 
import Navbar from "./Components/Navbar"

export default function MyApp({ Component , pageProps  }: AppProps) {
return (
   
   <Layout>
       <Navbar />
       <Component {...pageProps} />
   </Layout>
);}









