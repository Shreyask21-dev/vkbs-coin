import React from 'react'
import ProjectComponent from '@/components/ProjectCat'

export default function () {
  return (
    <>
     {/* Hero banner design */}
     <div className='section inner-hero-bannerProject project-hgt'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='inner-text'>
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
           <ProjectComponent/>
      </div>
    </div>
    </>
  )
}
