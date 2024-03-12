import React, { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import Layout from "@/components/Layout";
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import '@/styles/homepage.css'
import '@/styles/multiRangeSlider.css'
import '@/styles/timeline.css'
import '@/styles/elementor.css'


export default function App({ Component, pageProps }) {

  Router.onRouteChangeStart = url => {
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    
}, []);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
