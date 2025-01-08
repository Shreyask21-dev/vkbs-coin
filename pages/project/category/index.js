import React from 'react'
import ProjectComponent from '@/components/ProjectCat'
import Head from 'next/head';
export default function () {
  return (
    <>
      <Head>

        <title>MEP Solution Projects - VKBS Expertise in Commercial, Data Centers & More</title>
        <meta name="description" content="Explore our MEP services projects across various industries including commercial, healthcare, & IT parks.  Solutions for efficient, sustainable performance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Hero banner design */}
      <div className='section inner-hero-bannerProject project-hgt'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='inner-text innertext-Project' style={{ paddingRight: "25px !important" }}>
                <h1 className='innerTwoH3' >Project</h1>
                <p> Let us know how we can help you with your existing or future projects</p>
                <div className='line'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='col-lg-3 '>
          <ProjectComponent />
        </div>
      </div>
    </>
  )
}
