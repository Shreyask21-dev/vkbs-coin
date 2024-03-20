import React from 'react'
import EnquiryForm from '@/components/EnquiryForm'
import Link from 'next/link'
import Head from 'next/head'
import { BASEPATH } from "@/config";

import { useState, useEffect } from 'react';


export default function ContactUs({ LocationData }) {

  console.log("LocationData", LocationData)

 
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };



  return (
    <>
      <Head>
        
        {
          LocationData.map((item , index)=>(
            <>
            <link rel="stylesheet" href={`https://vkbs.coinage.host/wp-content/uploads/elementor/css/post-${item.ourlocationId}.css`} media="all" />
            </>
          ))
        }
      </Head>

      {/* Hero banner design */}
      <div className='section inner-hero-banner'>
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
                <h2>Integrity Defining <br /> Every  Milestone</h2>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='timeline-paragrap'>
                <p>Over 20 years of sustained partnerships with over 1000 clients, a testament to the customer-first ethos, unwavering integrity and transparency powering progress.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
            <div className='space5'></div>
            <div className='space5'></div>
      <div className='location'>
        <div className='container'>
          <h3>Branches</h3>
          <div className='space5'></div>
          <div className='row'>
            <div className="horizontal-tabs">
              <div className='tab-bg'>
              <div className="tab-buttons">
                {
                  LocationData.map((tab, index) => (
                    <button key={index} className={index === activeTab ? 'active' : ''}
                      onClick={() => handleTabClick(index)}> {tab.title}</button>))

                }
                </div>
              </div>
              <div className="tab-content tab-css" dangerouslySetInnerHTML={{ __html: LocationData[activeTab].content}}></div>
            </div>

          </div>
        </div>
      </div>

      <div className='section enquiry'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <EnquiryForm/>
            </div>
            <div className='col-lg-5'>
              <h6>Social Media</h6>
              <div className='social-media'>
                <img src='/images/facebook.png' className='social-media-list' alt='facebook.png' />
                <img src='/images/linkedin.png' className='social-media-list' alt='linkedin' />
                <img src='/images/youtube.png' className='social-media-list' alt='youtube' />
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
