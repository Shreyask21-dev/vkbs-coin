import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { BASEPATH } from "@/config";
import { useRouter } from 'next/router'


export default function SinglePage({ PageApiResult }) {

  const [isMobile, setIsMobile] = useState(false);

  const uniqueImageUrl = "https://vkbs.coinage.host/wp-content/uploads/2024/05/Rectangle-189.png";
  // unique image URL

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set the initial state
    handleResize();

    // Add event listener to update state on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // console.log("PageApiResult", PageApiResult.data.page)
  console.log("title", PageApiResult?.data?.page?.seo?.title)
  if (PageApiResult.data.page !== null) {
    return (
      <>
        <Head>
          <title>{PageApiResult?.data?.page?.seo?.title}</title>
          <meta name="description" content={PageApiResult?.data?.page?.seo?.metaDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
            rel="canonical"
            href={`https://vkbs.in/${PageApiResult?.data?.page?.slug}/`}
          />
          {/* <link rel="stylesheet" href={`https://vkbs.coinage.host/wp-content/uploads/elementor/css/post-${PageApiResult?.data?.page?.pageId}.css?ver=1736312194`} media="all" /> */}
        </Head>
        {/* Hero banner design */}
        <div className={`section inner-hero-banner ${PageApiResult.data.page.slug == 'team' && 'hide-team'}`}
          style={{
            background:
              PageApiResult?.data?.page?.title === "After Sales" && isMobile
                ? "url('/images/afterSalesMobile.jpg') no-repeat center"
                : `url(${PageApiResult?.data?.page?.featuredImage?.node?.sourceUrl}) no-repeat center`, backgroundSize: `cover`,
            backgroundSize: `cover`,
            height: isMobile
              ? "50vh"
              : PageApiResult?.data?.page?.title === "After Sales"
                ? "95vh"
                : "475px",
            paddingRight: "25px",
            marginTop: PageApiResult?.data?.page?.title === "After Sales" ? "2%" : "0px",
          }}

        >
          {/* {
            PageApiResult?.data?.page?.featuredImage !== null ? (
            <>
            </>) : (<></>)
          } */}
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='inner-text inner-Text-Extra'>


                  {PageApiResult?.data?.page?.title == 'After Sales' ? <h1></h1> : <h1>{PageApiResult?.data?.page?.title}</h1>}


                  {PageApiResult?.data?.page?.title == 'After Sales' ? <div className="description" ></div> : <div className="description" dangerouslySetInnerHTML={{ __html: PageApiResult?.data?.page?.excerpt }}></div>}


                  {PageApiResult?.data?.page?.title == 'After Sales' ? <div ></div> : <div className='line'></div>}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* inner elementor page Design */}
        <div className="innerpages-contentsdata">
          {PageApiResult?.data?.page?.content !== null && (
            <div
              dangerouslySetInnerHTML={{
                __html: `${PageApiResult?.data?.page?.content}`,
              }}
            ></div>
          )}
        </div>



      </>
    )
  }
}



export async function getStaticPaths() {
  const pageAPI = await fetch(`${BASEPATH}graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
           query NewQuery {
            pages(first: 5) {
              nodes {
                pageId
                slug
                title
              }
            }
          }
           `,
    }),
  });
  const pageResut = await pageAPI.json();
  const paths = pageResut.data.pages.nodes.map((list) => ({
    params: { pageslug: list.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}




export async function getStaticProps({ params }) {
  const resultData = await fetch(`${BASEPATH}graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query NewQuery {
            page(id: "${params.pageslug}" ,idType: URI) {
              pageId
              slug
              title
              seo {
                title
                metaDesc
              }
              content
              excerpt
              featuredImage {
                node{
                  sourceUrl
                }
              }
            }
          }
        `,
    }),
  });

  const PageApiResult = await resultData.json();


  return {
    props: {
      PageApiResult,

    },
    revalidate: 10,
  };
}
