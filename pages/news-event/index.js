import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BASEPATH } from "@/config";

export default function NewsEventIndex() {
  return (
    <>
      <div className='section inner-hero-banner'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='inner-text'>
                <h1>Events, Accolades & News</h1>
                <p>Latest updates from VKBS</p>
                <div className='line'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section-news news-event-section'>
        <div className='container'>
          <h2>Events</h2>
          <div className='space5'></div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='inner-event'>
                <img src='/images/event-2.png' alt='' />
                <div className='space2'></div>
                <span>22/10/2022</span>
                <h5>ACREX 2014</h5>
                <p>Lorem ipsum dolor sit amet consectetur. Arcu faucibus morbi aliquam non</p>
                <Link href='#' type="button" className="mt-2 btn btn-primary btn-job-carrer">Read More</Link>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='row'>

                <div className='col-lg-6'>
                  <div className='inner-event-right'>
                    <img src='/images/event-2.png' alt='' />
                    <div className='space2'></div>
                    <span>22/10/2022</span>
                    <h5>ACREX 2014</h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Arcu faucibus morbi aliquam non</p>
                    <Link href='#' type="button" className="mt-2 btn btn-primary btn-job-carrer">Read More</Link>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className='inner-event-right'>
                    <img src='/images/event-2.png' alt='' />
                    <div className='space2'></div>
                    <span>22/10/2022</span>
                    <h5>ACREX 2014</h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Arcu faucibus morbi aliquam non</p>
                    <Link href='#' type="button" className="mt-2 btn btn-primary btn-job-carrer">Read More</Link>
                  </div>
                </div>


                <div className='col-lg-6'>
                  <div className='inner-event-right'>
                    <img src='/images/event-2.png' alt='' />
                    <div className='space2'></div>
                    <span>22/10/2022</span>
                    <h5>ACREX 2014</h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Arcu faucibus morbi aliquam non</p>
                    <Link href='#' type="button" className="mt-2 btn btn-primary btn-job-carrer">Read More</Link>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className='inner-event-right'>
                    <img src='/images/event-2.png' alt='' />
                    <div className='space2'></div>
                    <span>22/10/2022</span>
                    <h5>ACREX 2014</h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Arcu faucibus morbi aliquam non</p>
                    <Link href='#' type="button" className="mt-2 btn btn-primary btn-job-carrer">Read More</Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      
          {/* Our Accolades */}

      <div className='section accolades-slider'>
        <div className='container'>
          <div className='inner-accolades-slider'>
            <h4>Accolades</h4>
            <div className='space5'></div>
            <Splide
                        options={{
                            perPage: 4,
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
                       
                     
                       <SplideSlide>
                             <div className="item-accolades">
                                 <img src='/images/a1.png' alt='' />
                             </div>
                         </SplideSlide>

                         <SplideSlide>
                             <div className="item-accolades">
                                 <img src='/images/a2.png' alt='' />
                             </div>
                         </SplideSlide>

                         <SplideSlide>
                             <div className="item-accolades">
                                 <img src='/images/a3.png' alt='' />
                             </div>
                         </SplideSlide>

                         <SplideSlide>
                             <div className="item-accolades">
                                 <img src='/images/a4.png' alt='' />
                             </div>
                         </SplideSlide>

                    
            </Splide>
          </div>
        </div>
      </div>
      <div className='space5'></div>
        
    </>
  )
}
