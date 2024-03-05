import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className="head-footer-bg sticky-header  navbar navbar-expand-lg" id="customnavbar">
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
              <Link className="nav-link active" href="/">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="/about-us" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ABOUT US
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/about-us">About ONE</Link></li>
                <li><Link className="dropdown-item" href="/about-us">About TWO</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="/solution" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                SOLUTIONS
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item " href="/solution">SOLUTIONS ONE</Link></li>
                <li><Link className="dropdown-item " href="/solution">SOLUTIONS TWO</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/project">
                PROJECTS
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/sustainability">
                SUSTAINABILITY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/career">
                CAREER
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="news-and-event">
                NEWS & EVENTS
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/contact-us">
                CONTACT US
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
