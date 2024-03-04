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
                 <div className='count-inner d-flex'>
                  <img src='/images/building.png' width='50' height='62' alt=''/>
                   <h2>346Mn <span>Sq.Ft</span></h2>
                 </div>
                 <p>MEP Projects Delivered</p>
              </div>
            </div>
          </div>
         </div>

    </>
  )
}
