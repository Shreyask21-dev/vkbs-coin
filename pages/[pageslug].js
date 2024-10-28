import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { BASEPATH } from "@/config";
import { useRouter } from 'next/router'


export default function SinglePage({ PageApiResult }) {

  const uniqueImageUrl = "https://vkbs.coinage.host/wp-content/uploads/2024/05/Rectangle-189.png"; 
  // unique image URL

    
  console.log("PageApiResult", PageApiResult.data.page.slug)
  if (PageApiResult.data.page !== null) {
    return (
      <>
        <Head>
          <title>{PageApiResult?.data?.page?.title}</title>
          <link rel="stylesheet" href={`https://vkbs.coinage.host/wp-content/uploads/elementor/css/post-${PageApiResult?.data?.page?.pageId}.css`} media="all" />
        </Head>
        {/* Hero banner design */}
        <div className={`section inner-hero-banner ${PageApiResult.data.page.slug == 'team' && 'hide-team'}`}
        style={{
          background: `url(${PageApiResult?.data?.page?.featuredImage?.node?.sourceUrl}) no-repeat center`,
          backgroundSize: `cover`,
          height:`475px`,
          paddingRight: "25px",
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


                {PageApiResult?.data?.page?.title == 'After Sales' ? <h1></h1>: <h1>{PageApiResult?.data?.page?.title}</h1>}


                {PageApiResult?.data?.page?.title == 'After Sales' ? <div className="description" ></div> : <div className="description" dangerouslySetInnerHTML={{ __html: PageApiResult?.data?.page?.excerpt }}></div> }


                {PageApiResult?.data?.page?.title == 'After Sales' ? <div ></div>: <div className='line'></div>}
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
