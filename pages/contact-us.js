import React from 'react'
import EnquiryForm from '@/components/EnquiryForm'
import Link from 'next/link'
import Head from 'next/head'
import { BASEPATH } from "@/config";
import { useRouter } from 'next/router';

import { useState, useEffect, useRef } from 'react';


export default function ContactUs({ LocationData }) {
  const router = useRouter();

  const { location } = router.query;
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef(null);



  useEffect(() => {
    if (location) {
      setActiveTab(parseInt(location));
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      // Handle tab click logic if required
      const handleTabClick = (location) => {
        setActiveTab(location);
      };
    }
  }, [location]); // Dependency ensures this runs only when 'location' changes

  const handleTabClick = (index) => {
    console.log("index---value", index)
    setActiveTab(index);
  };



  return (
    <>
      <Head>

        {
          LocationData.map((item, index) => (
            <>
              <link rel="stylesheet" href={`https://vkbs.coinage.host/wp-content/uploads/elementor/css/post-${item.ourlocationId}.css`} media="all" />
            </>
          ))
        }
      </Head>

      {/* Hero banner design */}
      <div className='section inner-hero-bannerContactUs'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='inner-text'>
                <h1>Contact Us</h1>
                <p> Let us know how we can help you with your existing or future projects</p>
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
                <h2>A Legacy of <br />Partnerships</h2>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='timeline-paragrap'>
                <p>With over 20 years of sustained partnerships and collaborations with more than 300 clients, VK Building Services Pvt. Ltd. embodies a customer-first ethos built on unwavering integrity and transparency. These strong relationships are a testament to our commitment to driving progress and delivering exceptional value in every project we undertake.</p>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className='space5'></div>
      <div className='space5'></div>

      <div className='location' ref={contentRef}>
        <div className='container' id='tabs'>
          <h3 className='innerTwoH3' style={{ fontSize: "50px", fontWeight: "700" }}>Branches</h3>
          <div className='space5'></div>
          <div className='row'>
            <div className="horizontal-tabs" id='tabs'>
              <div className='tab-bg'>
                <div className="tab-buttons">
                  {
                    LocationData.map((tab, index) => (
                      <button key={index} className={index === activeTab ? 'active' : ''}
                        onClick={() => handleTabClick(index, tab)}> {tab.title}</button>))
                  }
                </div>
              </div>
              {/* <div className="tab-content tab-css" dangerouslySetInnerHTML={{ __html: LocationData[activeTab].content}}></div> */}
              <div className="tab-content tab-css">
                <div className='conatiner'>
                  <div className='row'>
                    <div className='col-lg-4 added' >
                      <div className='inner-data-active' dangerouslySetInnerHTML={{ __html: LocationData[activeTab]?.content }} ></div>
                    </div>

                    <div className='col-lg-8' >
                      {/* <p>lorem ipsum</p> */}

                      {(() => {
                        switch (activeTab) {
                          case 0:
                            return <>
                            
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.953257765024!2d72.91306349999999!3d19.0921761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7d139c45dc5%3A0xefad90eddb83effb!2sVK%20Building%20Service%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1736228120753!5m2!1sen!2sin"  style={{border:"0", width:"100%", height:"400px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            </>;
                          case 1:
                            return <>
                            
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.4133690665276!2d78.3871427!3d17.442400499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9144c254fb5b%3A0xdd98b22345eeab6a!2sVK%20Building%20services%20Pvt%20Limited!5e0!3m2!1sen!2sin!4v1736228068037!5m2!1sen!2sin" style={{border:"0", width:"100%", height:"400px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            
                            </>;
                          case 2:
                            return <>
                            
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.973134707339!2d77.640907!3d12.9735701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a63fad96f3%3A0x850e858af7e296ac!2sVK%20Building%20service%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1736228005403!5m2!1sen!2sin" style={{border:"0", width:"100%", height:"400px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            </>;
                          case 3:
                            return <>
                            
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.4695933045136!2d80.20736529999999!3d13.009671100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526740ff3cf767%3A0xb18d85009a201bf7!2sVK%20Building%20services!5e0!3m2!1sen!2sin!4v1736228168428!5m2!1sen!2sin" style={{border:"0", width:"100%", height:"400px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            </>;
                          default:
                            return <p>Select a city</p>;
                        }
                      })()}

                      {/* map be here */}

                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>




      <div className='section enquiry'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <EnquiryForm />
            </div>
            <div className='col-lg-5'>
              <h6 className='innerTwoH3' >Social Media</h6>
              <div className='social-media'>
                <a href="https://www.facebook.com/VKBuildingServices">
                  <img src='/images/facebook.png' className='social-media-list' alt='facebook.png' />
                </a>
                <a href="https://www.linkedin.com/company/vk-building-services-pvt-ltd-/">
                  <img src='/images/linkedin.png' className='social-media-list' alt='linkedin' />
                </a>
                <a href="https://www.youtube.com/@vkbuildingservices6575">
                  <img src='/images/youtube.png' className='social-media-list' alt='youtube' />
                </a>
              </div>
            </div>
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
        query MyQuery2Copy {
          ourlocations {
            nodes {
              content
              ourlocationId
              title
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
        LocationData: data.data.ourlocations.nodes,
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
