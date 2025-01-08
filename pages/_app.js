import React, { useEffect, useState } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import Layout from "@/components/Layout";
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import '@/styles/homepage.css'
import '@/styles/multiRangeSlider.css'
import '@/styles/timeline.css'

import Head from 'next/head';

import { BASEPATH } from "@/config";



export default function App({ Component, pageProps }) {

  const [getPageId, setPageId] = useState(null);

  Router.onRouteChangeStart = url => {
    NProgress.start()
  }
  Router.onRouteChangeComplete = () => NProgress.done()
  Router.onRouteChangeError = () => NProgress.done()


  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");


  }, []);

  useEffect(() => {
    const storedPageIDs = JSON.parse(localStorage.getItem('pageIDs'));

    if (storedPageIDs) {
      setPageId(storedPageIDs);
    }

    const fetchPages = async () => {
      try {
        const pagesResponse = await fetch(`${BASEPATH}graphql`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
            query {
              pages(first: 100) {
                nodes {
                  pageId
                }
              }
            }
          `,
          }),
        });

        if (!pagesResponse.ok) {
          throw new Error(`Pages fetch error: ${pagesResponse.status}`);
        }

        const pagesData = await pagesResponse.json();

        // Fetching page IDs
        const fetchedPageIDs = pagesData?.data?.pages?.nodes.map(node => node.pageId) || [];

        // Store Page IDs in localStorage
        localStorage.setItem('pageIDs', JSON.stringify(fetchedPageIDs));
        setPageId(fetchedPageIDs);
        console.log('Page IDs:', fetchedPageIDs);
      } catch (err) {
        console.error("Error fetching pages:", err);
      }
    };

    // Fetch pages if page IDs are not already in localStorage
    if (!storedPageIDs) {
      fetchPages();
    }
  }, []);

  return (
    <>

      <Head>
        {getPageId && getPageId.map((pageID, index) => (
          // <link
          //   key={index}
          //   rel="stylesheet"
          //   href={`${BASEPATH}wp-content/uploads/elementor/css/post-${pageID}.css`}
          // />
          <link  key={index} rel="stylesheet" href={`https://vkbs.coinage.host/wp-content/uploads/elementor/css/post-${pageID}.css?ver=1736312194`} media="all" />
        ))}
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
