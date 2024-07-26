import React from 'react'
import EnquiryForm from '@/components/EnquiryForm'
import Link from 'next/link'
import Head from 'next/head'
import { BASEPATH } from "@/config";

export default function Industries({ IndustryPage }) {

  console.log("IndustryPage", IndustryPage)
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
      </Head>
      {/* Hero banner design */}
      <div className='section inner-hero-bannerIndustries'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='inner-text'>
                <h1>Our Portfolio of MEP Excellence</h1>
                <p>Explore our extensive range of successfully completed projects across various industries, demonstrating our commitment to quality and innovation in MEP contracting services.</p>
                <div className='line'></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='section quality'>
        <div className='container'>
          <div className='row' style={{display:"flex", alignItems:"center"}} >
            <div className='col-lg-6'>
            {/* className='bg-exp-data' */}
              <img src='/images/over-view.webp' style={{borderRadius:"15px"}}   alt='' />
            </div>
            <div className='col-lg-6'>
              <div className='inner-two'>
                <h3>Overview</h3>
                <br />
                <p className='paragraph justify'>At VKBS, we take pride in our integrated approach to Mechanical, Electrical, and Plumbing (MEP) systems, where excellence meets sustainability. Our commitment lies in achieving a harmonious balance between intricate engineering and energy-efficient solutions, all while adhering to the latest industry codes and standards. With a diverse portfolio, VKBS has successfully completed projects involving specialized engineering systems, ranging from free cooling for data centres to once through seawater cooling for power plants.
                </p>
                <p className='paragraph justify'>As an MEP contractor, VKBS has consistently delivered projects that qualify for Platinum and Gold-rated green certifications, along with superior ratings under the Energy Conservation Building Code (ECBC)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='over-view-design'>
        <div className='container'>
          <h2>Industry Expertise</h2>
          <div className='row'>
            
            {
              IndustryPage.industries.nodes.map((item, index) => (
                <>
                  <div className='col-lg-4'>
                    <div className="image-container" style={{ backgroundImage: ` linear-gradient(0deg, rgb(20 1 12 / 30%), rgb(238 237 238 / 30%)), url('${item?.featuredImage.node.guid}')` }}>
                      <div className="title-overlay">{item.title} <br/>
                     <div className="d-flex">
                     <img src='/images/location.png' width='18' height='20' alt='' />
                     <div className='location'
                            dangerouslySetInnerHTML={{
                              __html: `${item.excerpt}`,
                            }}
                          ></div>
                     </div>
                      </div>
                      <div className="text-overlay">
                        <div className='inner-over'>{item.title}
                        {item?.content !== null && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: `${item?.content}`,
                            }}
                          ></div>
                          
                        )}
                        </div>
                      </div>
                    </div>
                  </div>

                </>
              ))
            }

          </div>
        </div>
      </div>
    </>
  )
}



export async function getServerSideProps() {
  try {
    const response = await fetch(`${BASEPATH}graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query MyQuery2Copy {
          industries(first: 100) {
            nodes {
              title
              content
              excerpt
              industrieId
              featuredImage {
                node {
                  guid
                }
              }
            }
          }
        }
          `,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return {
      props: {
        IndustryPage: data.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        pageData: null,
        error: "Error fetching data",
      },
    };
  }
}
