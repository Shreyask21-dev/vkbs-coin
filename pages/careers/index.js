import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BASEPATH } from "@/config";


export default function CareersIndex({carrersData}) {
 
  const JobData = carrersData.nodes;
   const [jobList , setJobList] =useState(JobData)

   const myFunction = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
   
  return (
    <>
      <Head>
        <title>careers</title>
       
      </Head>

      <div className='section inner-hero-bannerCareer'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='inner-text'>
                <h1>Careers</h1>
                <p>Be a part of our story</p>
                <div className='line'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* count design */}
      <div className='section-two count-design'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='timeline-sub-heading'>
                <h2>Join the MEP <br />Revolution</h2>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='timeline-paragrap'>
                <p className='justify'>Explore exciting career opportunities at VKBS, from engineering and project management to sales and operations and be part of a dynamic team driving innovation in MEP engineering and consulting. Find your niche, grow your skills, unleash your potential & expand your horizons, in a supportive and collaborative environment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Turnkey MEP Solutions */}
        <div className='section two-right'>
        <div className='container'>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-lg-6 mt-3'>
              <img src='/images/careers.png' className='bg-exp-data' alt='' />
            </div>
            <div className='col-lg-6 mt-3'>
              <div className='inner-two'>
                <h3>Disrupt, Innovate & Grow</h3>
                <p className='justify'>Join VKBS and become part of a dynamic team dedicated to excellence, innovation, and sustainability. Here’s your opportunity to engage in transformative MEP engineering projects that redefine infrastructure and construction. From eco-friendly buildings to state-of-the-art technologies, your work will leave a lasting impact on communities and industries across the globe.<br/><br/>
                Collaborate with skilled professionals who share a passion for making a difference in the MEP engineering landscape. Enjoy a vibrant work culture filled with challenging projects and abundant opportunities for personal and professional growth. Together, let’s disrupt the status quo, innovate solutions, and drive the future of our industry forward!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slider for all  Job */}

{/* Our Solutions */}

      <div className='section job-slider'>
        <div className='container'>
          <div className='section-slider'>
            <h4>Open Positions</h4>
            <div className='space5'></div>
            <Splide
                        options={{
                            perPage: 3,
                            breakpoints: {
                                991: {
                                    perPage: 3,
                                },
                                767: {
                                    perPage: 2,
                                },
                                640: {
                                    perPage: 1,
                                },
                            },
                            rewind: true,
                            autoplay: true,
                            interval: 6000,
                            // type: 'fade',
                            // speed: 2200
                        }}
                        aria-label="customList">
                       
                     


                         {
                          jobList.map((item , index)=>(
                            <>
                            
                            
                             <SplideSlide>
                             <div className="job-item">
                                 <strong className=''>{item?.industryData?.location}</strong>
                                 <div className='job-title'>{item.title}</div>
                                 <div className='year-class'>
                                    <ul>
                                        <li>{item?.industryData?.year}</li>
                                        <li>{item?.industryData.mep}</li>
                                    </ul>
                                 </div>
                                 <div className='job-description justify' dangerouslySetInnerHTML={{__html: `${item.excerpt}`}}></div>
                                 <Link href={item.uri} type="button" className="mt-2 btn btn-primary btn-job"> Read More</Link>
                             </div>
                         </SplideSlide>
                            
                            </>
                          ))
                         }
                      
                    </Splide>
          </div>
        </div>
      </div>
      

    </>
  )
}





export async function getServerSideProps() {
  try {
    const response = await fetch(`${BASEPATH}graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query NewQuery {
          careers(first: 100) {
            nodes {
              slug
              uri
              title
              excerpt
              industryData {
                location
                mep
                year
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
        carrersData: data.data.careers,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        pageData: null,
        error: 'Error fetching data',
      },
    };
  }
}
