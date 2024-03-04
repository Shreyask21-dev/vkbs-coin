import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero banner design */}
      <div className='section herobanner'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='inner-text'>
                <h1>Welcome To India's <br /> leading MEP Engineering & Contracting Company</h1>
                <p>Delivering Quality With Innovation Since 2005</p>
                <Link href='/'
                  type="button"
                  className="mt-2 btn btn-primary btn-rounded btn-lg">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* count design */}

      <div className='section-two count-design'>
        <div className='container'>
          <div className='row'>

            <div className='col-lg-3'>
              <div className='count-inner'>
                <div className='d-flex'>
                  <img src='/images/building.png' width='40' height='50' alt='' />
                  <h2>346Mn <span>Sq.Ft</span></h2>
                </div>
                <p>MEP Projects Delivered</p>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className='count-inner'>
                <div className='d-flex'>
                  {/* <img src='/images/building.png' width='50' height='62' alt=''/> */}
                  <h2>₹ 2450 Cr</h2>
                </div>
                <p>MEP Projects Completed</p>
              </div>
            </div>


            <div className='col-lg-3'>
              <div className='count-inner'>
                <div className='d-flex'>
                  <img src='/images/man.png' width='45' height='50' alt='' />
                  <h2>346Mn <span>Sq.Ft</span></h2>
                </div>
                <p>Team Strength</p>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className='count-inner-4'>
                <div className='d-flex'>
                  <img src='/images/location.png' width='30' height='40' alt='' />
                  <h2>17 States</h2>
                </div>
                <p>Ongoing & Completed Projects </p>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Turnkey MEP Solutions */}
      <div className='section two-right'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <img src='/images/erp.png' alt='' />
            </div>
            <div className='col-lg-6'>
              <div className='inner-two'>
                <h6>What We do</h6>
                <h3>Turnkey MEP Solutions</h3>
                <p>VK Building Services Pvt. Ltd. are the fastest growing MEP Contracting Company providing Turnkey solutions - from concept to commissioning in critical MEP Projects across key sectors. With a customer focused approach, an innovative culture and the ability to respond positively to challenging requirements, we have served over 1000+ satisfied clients. Sustainability and inclusive growth are embedded in our vision and strategic plans.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Our Solutions */}

      <div className='section solution-slider'>
        <div className='container'>
          <div className='section-slider'>
            <h6>OUR EXPERTISE</h6>
            <h5>Our Solutions</h5>
          </div>
        </div>
      </div>

      {/* {Fabrication} */}

      <div className='section two-left'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='inner-two'>
                <h6>unleashing MEP Revolution with</h6>
                <h3>Pre-Fabrication</h3>
                <p>Reimagining onsite execution, VKBS revolutionizes MEP services by integrating manufacturing excellence through pre-fabrication for rapid assembly of defect-free modular components.. Our pioneering template-driven prefab techniques integrate innovation with quality and safety to fast-track projects and maximize customer delight.</p>
                <Link href='/'
                  type="button"
                  className="mt-2 btn btn-primary btn-rounded btn-lg">
                  Know More
                </Link>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src='/images/left.png' alt='' />
            </div>
          </div>
        </div>
      </div>


      {/* expertise */}
      <div className='section expertise'>
        <div className='container'>
          <h6>Featured projects</h6>
          <div className='row'>
            <div className='col-lg-6'>
              <h3>See our expertise</h3>
            </div>
            <div className='col-lg-6 text-end'>
              <Link href='/'
                type="button"
                className="mt-2 btn btn-primary btn-rounded btn-lg">
                View All Projects
              </Link>
            </div>
          </div>
          <div className='space10'></div>
          <div className='row'>
          <div className='col-lg-3'>
            <div className='bg-exp bg-exp-data'>
              <h6>Infrastructure</h6>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <p>Bangalore</p>
              <Link href='/'
                type="button"
                className="mt-2 btn btn-primary-two btn-rounded btn-lg">
                View 
              </Link>
            </div>
           
           </div>
           <div className='col-lg-3'>
           <img src='/images/exp1.png' alt='' />
           </div>
           <div className='col-lg-3'>
           <img src='/images/exp2.png' alt='' />
           </div>
           <div className='col-lg-3'>
           <img src='/images/exp3.png' alt='' />
           </div>
          </div>
        </div>
      </div>


      {/* Delivery */}
      <div className='section two-left'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='inner-two'>
                <h6>MEP Excellence With</h6>
                <h3>Integrated Project Delivery</h3>
                <p>Our MEP services are powered by Centre of Excellence, Project Control Department, stringent 4-Level Monitoring governance, and Transition Task Force, ensuring seamless integration across project lifecycles. This unified alignment of cross-functional expert teams results in optimized outcomes by collectively driving adherence to critical success benchmarks - safety, quality, timely delivery and perfection - across the entirety of Mechanical, Electrical and Plumbing solutions.</p>
                <Link href='/'
                  type="button"
                  className="mt-2 btn btn-primary btn-rounded btn-lg">
                  Know More
                </Link>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src='/images/grop-vkbs.png' alt='' />
            </div>
          </div>
        </div>
      </div>


      {/* Quality */}

      <div className='section quality'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
            <img src='/images/pipe.png' alt='' />
            </div>
            <div className='col-lg-6'>
            <div className='inner-two'>
                <h6>why us</h6>
                <h3>Unwavering Commitment to Quality Delivery</h3>
                <p>With over 65 million square feet of MEP projects executed, 2 million square feet of EPC development encompassing 2000+ residential units, 6,00,000 square feet of specialized fit-outs and delivery of 2,00,000+ square feet A-grade workspaces - VKBS offers unrivaled competencies spanning integrated design-build services, project management and quality-focused sustainable execution of complex mechanical, electrical and plumbing solutions pan-India, making us the industry's most trusted one-stop MEP services provider.</p>
                <Link href='/contact-us'
                  type="button"
                  className="mt-2 btn btn-primary btn-rounded btn-lg">
                  Contact Us
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>



    </>
  )
}
