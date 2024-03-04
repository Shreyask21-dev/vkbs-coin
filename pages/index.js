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
                  <img src='/images/building.png' width='40' height='50' alt=''/>
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
                  <img src='/images/man.png' width='45' height='50' alt=''/>
                   <h2>346Mn <span>Sq.Ft</span></h2>
                  </div>
                   <p>Team Strength</p>
                 </div>
              </div>

              <div className='col-lg-3'>
                <div className='count-inner-4'>
                 <div className='d-flex'>
                  <img src='/images/location.png' width='30' height='40' alt=''/>
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
                  <span>What We do</span>
                  <h3>Turnkey MEP Solutions</h3>
                  <p>VK Building Services Pvt. Ltd. are the fastest growing MEP Contracting Company providing Turnkey solutions - from concept to commissioning in critical MEP Projects across key sectors. With a customer focused approach, an innovative culture and the ability to respond positively to challenging requirements, we have served over 1000+ satisfied clients. Sustainability and inclusive growth are embedded in our vision and strategic plans.</p>
                </div>
               </div>
            </div>
          </div>
         </div>

    </>
  )
}
