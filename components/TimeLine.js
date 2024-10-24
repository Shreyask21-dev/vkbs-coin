import React,{useState} from 'react'
import Link from 'next/link'
// import timeline from '../public/images/timeline.webp'
import TimelineImage from 'next/image'

export default function TimeLine() {



  return (
    <>
      <div className='timeline-section pb-4 pt-4'>
        <div className='container'>
          <h2 className='text-center' style={{fontSize:"50px !important"}}>VKBS Through the Years: A Timeline of Success</h2>
          <div className='space10'></div>
          <div className='time-line'>
            <img src='/images/timelineUpdated.png' alt='' />
          </div>
        </div>
      </div>

      {/* <div className='timeline-start'>
         <h2 className='text-center'>Company Timeline</h2>
        <div className='container'>
          <div class="timeline">
            <div class="container-time left">
             
              <div class="content">
                <h2>2005</h2>
                <p>Company launched for HVAC Services</p>
              </div>
            </div>
            <div class="container-time right">
              <div class="content">
                <h2>2007</h2>
               <p>Started PHE, LSS Services</p>
              </div>
            </div>
            <div class="container-time left">
              <div class="content">
                <h2>2009</h2>
               <p>Brand VKBS is born</p>
              </div>
            </div>
            <div class="container-time right">
              <div class="content">
                <h2>2011</h2>
                <p>Awarded World’s 3rd biggest data center project</p>
                <div className='content-body'>
                  <p>Launched Real Estate, Tech Park division</p>
                </div>
              </div>
            </div>
            <div class="container-time left">
              <div class="content">
                <h2>2013</h2>
                <p>Awarded Largest Residential Township Project in Bengaluru</p>
              </div>
            </div>
            <div class="container-time right">
              <div class="content">
                <h2>2015</h2>
                 <p>Civil EPC Division starts</p>
                 <div className='content-body'>
                  <p>Awarded NetApp Data Center Project</p>
                 </div>
              </div>
            </div>

            <div class="container-time left">
              <div class="content">
                <h2>2017</h2>
               <p>Awarded Asia’s largest Tech Park Project</p>
              </div>
            </div>
       
            <div class="container-time right">
              <div class="content">
                <h2>2022</h2>
                 <p>Foundation of VKBS Factory in Hyderabad</p>
                
              </div>
            </div>

            <div class="container-time left">
              <div class="content">
                <h2>2022</h2>
               <p>Awarded E&M works for Gujarat Metro</p>
              </div>
            </div>


            <div class="container-time right">
              <div class="content">
                <h2>2023</h2>
                 <p>PreFab factory at Ananthapur starts</p>
                 
              </div>
            </div>

          </div>
        </div>
      </div> */}



    </>
  )
}
