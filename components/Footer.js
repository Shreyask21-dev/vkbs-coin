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
              <p>We are Indias leading turnkey MEP services providers, extending unmatched integrated mechanical, electrical and plumbing solutions for complex infrastructure needs. Powered by technical prowess of seasoned MEP contractors, we engineer and execute end-to-end, sustainable defect-free systems tailored to project vision across data centers, healthcare facilities, industries and residences.</p>

            </div>
            <div className='col-lg-2'>
              <h5>Quick Links</h5>
              <ul className='footer-nav'>
                <li><Link href="/out-story">Our Story</Link></li>
                <li><Link href="/project">Projects</Link></li>
                <li><Link href="/career">Career</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/event">Event</Link></li>
              </ul>
            </div>
            <div className='col-lg-2'>
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
                <li><img src="/images/envelope.png" alt=''/><span> Username @example.com</span></li>
                <li><img src="/images/phone.png" alt=''/><span>0000-222-333</span></li>
              </ul>
            </div>

            <div className='col-lg-2'>
              <h5>Our Locations</h5>
              <ul className='footer-nav'>
                <li><Link href="#">New Delhi</Link></li>
                <li><Link href="#">Mumbai</Link></li>
                <li><Link href="#">Hyderabad</Link></li>
                <li><Link href="#">Bangalore</Link></li>
                <li><Link href="#">Chennai</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='social-media'>
            <img src='/images/facebook.png' className='social-media-list' alt='facebook.png' />
            <img src='/images/linkedin.png' className='social-media-list' alt='linkedin' />
            <img src='/images/youtube.png' className='social-media-list' alt='youtube' />
          </div>
        </div>
      </div>
      <div className='copy-right'>
        <div className='copy-right-text'>copyrights</div>
      </div>
    </>
  )
}
