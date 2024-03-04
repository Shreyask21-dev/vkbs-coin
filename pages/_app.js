import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import '@/styles/homepage.css'
import '@/styles/slider.css'
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
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
