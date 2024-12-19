import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  
  const router = useRouter();
  var LiveUrl = router.asPath;
  console.log("router->" , LiveUrl)

  useEffect(() => {
    const navbarContent = document.getElementById('navbarSupportedContent');
    if (navbarContent) {
      if (navbarContent.classList.contains('show')) {
        navbarContent.classList.remove('show');
      }
    }

  }, [LiveUrl])

  return (
    <nav className="navbar-dark head-footer-bg sticky-header  navbar navbar-expand-lg" id="customnavbar">
      <div className="container">
        <Link href='/' className="navbar-brand">
          <img src="/images/vkbs-logo.png" width='132' height='55' alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              
              <Link className={`nav-link ${LiveUrl == '/' ? 'active' : ''}`} href="/">
                HOME
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ABOUT US
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item " href="/about-us">About Company</Link></li>
                <li><Link className="dropdown-item" href="/our-story/">Our Story</Link></li>
                {/* <li><Link className="dropdown-item" href="/infrastructure/">Infrastructure</Link></li> */}
                <li><Link className="dropdown-item" href="/quality-assurance/">Quality Assurance</Link></li>
                <li><Link className="dropdown-item" href="/team/">Team</Link></li>
                <li><Link className="dropdown-item" href="/corporate-policies/">Corporate Policies</Link></li>
                
              </ul>
            </li>

            {/* <li className="nav-item">
              <Link className={`nav-link`} href="/mechanical/">
                 SOLUTIONS
              </Link>
            </li> */}

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="/mechanical/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                SOLUTIONS
              </Link>
              <ul className="dropdown-menu">
             
                <li><Link className="dropdown-item " href="/mechanical/#subnav">Integrated MEP Solutions</Link></li>
                <li><Link className="dropdown-item " href="/prefabrication/">Pre Fabrication</Link></li>
                <li><Link className="dropdown-item " href="/after-sales/">Maintenance Services</Link></li>
                {/* <li><Link className="dropdown-item" href="/industries/">Industries</Link></li> */}
              </ul>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${LiveUrl == '/project/category/commercial/' ? '' : ''}`} href="/project/category/commercial/">
                PROJECTS
              </Link>
            </li>

            {/* LiveUrl */}
            {/* <li className="nav-item">
              <Link className={`nav-link ${LiveUrl == '/sustainability/' ? 'active' : ''}`} href="/sustainability/">
                SUSTAINABILITY
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className={`nav-link ${LiveUrl == '/careers/' ? 'active' : ''}`} href="/careers/">
              CAREERS
              </Link>
            </li>

           
            

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="/mechanical/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              EVENTS
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item " href="/news-event/">NEWS EVENT</Link></li>
                <li><Link className="dropdown-item " href="/blog/">BLOG</Link></li>
              </ul>
            </li>


            <li className="nav-item">
              <Link className={`nav-link ${LiveUrl == '/contact-us/' ? 'active' : ''}`} href="/contact-us/">
                CONTACT US
              </Link>
            </li>

            {/* Search Icon */}
           <li className="nav-item">
             <Link className="nav-link" href="#">
                 <i className="fa fa-search"></i>
             </Link>
         </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
