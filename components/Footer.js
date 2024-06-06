import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className='footer head-footer-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <img src="/images/vkbs-logo.png" width='132' height='55' alt="logo" />
              <div className='space5'></div>
              <p className='justify pb-4'>We are Indias leading turnkey MEP services providers, extending unmatched integrated mechanical, electrical and plumbing solutions for complex infrastructure needs. Powered by technical prowess of seasoned MEP contractors, we engineer and execute end-to-end, sustainable defect-free systems tailored to project vision across data centers, healthcare facilities, industries and residences.</p>

            </div>
            <div className='col-lg-2 col-6 '>
              <h5>Quick Links</h5>
              <ul className='footer-nav'>
                <li><Link href="/our-story">Our Story</Link></li>
                <li><Link href="/project/infrastructures/">Projects</Link></li>
                <li><Link href="/careers">Career</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/news-event">Event</Link></li>
              </ul>
            </div>
            <div className='col-lg-2 col-6'>
              <h5>Our Solutions</h5>
              <ul className='footer-nav'>
                <li><Link href="/mep">MEP</Link></li>
                <li> <Link href="/sales-services">After Sales Services</Link></li>
                <li><Link href="/prefabrication">Prefabrication</Link></li>
                
              </ul>
            </div>
            <div className='col-lg-3'>
              <h5>Contact Info</h5>
              <p>
                You can always contact with us via email  or phone. Get in touch with contact and get a quote form.
              </p>
              <ul className='footer-nav'>
                <li><img src="/images/envelope.png" alt=''/><span> username@example.com</span></li>
                <li><img src="/images/phone.png" alt=''/><span>0000-222-333</span></li>
              </ul>
            </div>

            <div className='col-lg-2'>
              <h5>Our Locations</h5>
              <ul className='footer-nav'>
                <div className="row">
                  <div className="col-lg-12 col-6">
                    <li><Link href="/contact-us/">New Delhi</Link></li>
                    <li><Link href="/contact-us/">Mumbai</Link></li>
                    <li><Link href="/contact-us/">Hyderabad</Link></li>
                  </div>
                  <div className="col-lg-12 col-6">
                    <li><Link href="/contact-us/">Bangalore</Link></li>
                    <li><Link href="/contact-us/">Chennai</Link></li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='social-media'>
            {/* <img src='/images/facebook.png' className='social-media-list' alt='facebook.png' />
            <img src='/images/linkedin.png' className='social-media-list' alt='linkedin' />
            <img src='/images/youtube.png' className='social-media-list' alt='youtube' /> */}
            <a href="https://www.facebook.com/VKBuildingServices"  target='_blank'> 
              <span>
                <img src='/images/facebook.png' className='social-media-list' alt='facebook.png' />
              </span>
            </a>
            <a href="https://www.linkedin.com/company/vk-building-services-pvt-ltd-/" target='_blank'>
              <span>
                <img src='/images/linkedin.png' className='social-media-list' alt='linkedin' />
              </span>
            </a>
            <a href="https://www.youtube.com/@vkbuildingservices6575/"  target='_blank'>
              <span>
                <img src='/images/youtube.png' className='social-media-list' alt='youtube' />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className='copy-right'>
        <div className='copy-right-text'>copyrights</div>
      </div>
    </>
  )
}
