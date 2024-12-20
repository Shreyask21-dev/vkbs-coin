import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BASEPATH } from "@/config";

export default function NewsEventIndex() {
  return (
    <>
      <div className='section inner-hero-bannerEvents'>
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
          <h2 className='innerTwoH3'>Events</h2>
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

                <div className='col-lg-6 my-4'>
                  <div className='inner-event-right'>
                    <img src='/images/URJAVARAN.png' className='innerEventRight' alt='' />
                    <div className='space2'></div>
                    <span>22/10/2022</span>
                    <h5>URJAVARAN</h5>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur. Arcu faucibus morbi aliquam non</p>
                    <Link href='#' type="button" className="mt-3 btn btn-primary btn-job-carrer">Read More</Link>
                  </div>
                </div>

                <div className='col-lg-6 my-4'>
                  <div className='inner-event-right'>
                    <img src='/images/ACRESERVE.png' className='innerEventRight' alt='' />
                    <div className='space2'></div>
                    <span>22/10/2022</span>
                    <h5>ACRESERVE '13, BANGALORE</h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Arcu faucibus morbi aliquam non</p>
                    <Link href='#' type="button" className="mt-2 btn btn-primary btn-job-carrer">Read More</Link>
                  </div>
                </div>


                <div className='col-lg-6 my-4'>
                  <div className='inner-event-right'>
                    <img src='/images/INFRASTRUCTURE.png' className='innerEventRight' alt='' />
                    <div className='space2'></div>
                    <span>22/10/2022</span>
                    <h5>INFRASTRUCTURE PROJECT MANAGEMENT</h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Arcu faucibus morbi aliquam non</p>
                    <Link href='#' type="button" className="mt-2 btn btn-primary btn-job-carrer">Read More</Link>
                  </div>
                </div>

                <div className='col-lg-6 my-4'>
                  <div className='inner-event-right'>
                    <img src='/images/ACREX12.png' className='innerEventRight' alt='' />
                    <div className='space2'></div>
                    <span>22/10/2022</span>
                    <h5>ACREX '12, BANGALORE </h5>
                    <p className="mt-4 pt-2">Lorem ipsum dolor sit amet consectetur. Arcu faucibus morbi aliquam non</p>
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
            <h4 className="mb-4">Accolades</h4>
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
                <div className="item-accolades d-flex justify-content-center">
                  <img src='/images/a1.png' className='pt-3' alt='' />
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="item-accolades d-flex justify-content-center">
                  <img src='/images/a2.png' className='pt-3' alt='' />
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="item-accolades d-flex justify-content-center">
                  <img src='/images/a3.png' className='pt-3' alt='' />
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="item-accolades d-flex justify-content-center">
                  <img src='/images/a4.png' className='pt-3' alt='' />
                </div>
              </SplideSlide>


            </Splide>
          </div>
        </div>
      </div>
      <div className='space5'></div>
      <div className='section news-list'>
        <div className='container'>
          <h3 className='innerTwoH3' >News</h3>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='news'>
                <ul>
                  <li>
                    <div className="inner-img d-flex ">
                      <img src='/images/news.png' alt='' />
                      <span style={{fontWeight:"700", fontSize:"16px", lineHeight:"18.75px"}}>VKBS awarded E&M Works of 15 stations for Ahmedabad Metro by GMRCL</span>
                    </div>

                  </li>
                  <li>
                    <div className="inner-img d-flex"><img src='/images/news.png' alt='' />
                      <span style={{fontWeight:"700", fontSize:"16px", lineHeight:"18.75px"}}>VKBS awarded E&M Works of 20 stations for Surat Metro by GMRCL</span>
                    </div>

                  </li>
                  <li>
                    <div className="inner-img d-flex">
                      <img src='/images/news.png' alt='' />
                      <span style={{fontWeight:"700", fontSize:"16px", lineHeight:"18.75px"}}>VKBS awarded MEP works for Sattva Horizon at Bengaluru</span>
                    </div>

                  </li>

                </ul>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='news'>
                <ul>
                  <li>
                    <div className="inner-img d-flex">
                      <img src='/images/news.png' alt='' />
                      <span style={{fontWeight:"700", fontSize:"16px", lineHeight:"18.75px"}}>VKBS Awarded HVAC package for BAM Digital Realty Data Centre at Chennai</span>
                    </div>
                  </li>
                  <li>
                    <div className="inner-img d-flex">
                      <img src='/images/news.png' alt='' />
                      <span style={{fontWeight:"700", fontSize:"16px", lineHeight:"18.75px"}}>VKBS Awarded MEP package for Microsoft Central Kitchen at Hyderabad</span>
                    </div>
                  </li>
                  <li>
                    <div className="inner-img d-flex">
                      <img src='/images/news.png' alt='' />
                      <span style={{fontWeight:"700", fontSize:"16px", lineHeight:"18.75px"}}>VKBS Awarded MEP package for ITC Bangalore</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
