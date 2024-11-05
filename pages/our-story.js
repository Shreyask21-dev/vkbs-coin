import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import TimeLine from '@/components/TimeLine'
import TimeLineMobile from '@/components/TimeLineMobile'
export default function Companytimeline() {

  
  const [Offices, setOffices] = useState(0)
  const [ProjectsDelevred, setProjectsDelevred] = useState(0)
  const [ProjectState, setProjectState] = useState(0)
  const [EmpPRojects, setEmpPRojects] = useState(0)

  const accountIncrement = ()=>{
    setOffices(prevalue => {
      if(prevalue < 4 ){
        return prevalue + 1
      }
      else{
        return prevalue
      }
    } )
  }

  useEffect(() => {
    const intervalId = setInterval(accountIncrement, 1.1); 
  
    return () => clearInterval(intervalId);
  }, [])


  const accountIncrement1 = ()=>{
    setProjectsDelevred(prevalue => {
      if(prevalue < 80 ){
        return prevalue + 1
      }
      else{
        return prevalue
      }
    } )
  }

  useEffect(() => {
    const intervalId = setInterval(accountIncrement1, 1.1); 
  
    return () => clearInterval(intervalId);
  }, [])

  const accountIncrement2 = ()=>{
    setProjectState(prevalue => {
      if(prevalue < 17 ){
        return prevalue + 1
      }
      else{
        return prevalue
      }
    } )
  }

  useEffect(() => {
    const intervalId = setInterval(accountIncrement2, 1.1); 
  
    return () => clearInterval(intervalId);
  }, [])


  const accountIncrement3 = ()=>{
    setEmpPRojects(prevalue => {
      if(prevalue < 300 ){
        return prevalue + 1
      }
      else{
        return prevalue
      }
    } )
  }

  useEffect(() => {
    const intervalId = setInterval(accountIncrement3, 1.1); 
  
    return () => clearInterval(intervalId);
  }, [])

  const myFunction = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  const myFunction2 = () => {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  

  return (
    <>
     {/* Hero banner design */}
      <div className='sectionOurStory inner-hero-bannerOurStory'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='inner-text'>
                <h1>Building MEP Systems for a New Era of Possibilities</h1>
                <p className='center'>Over 20 years of sustained partnerships with over 1000 clients, a testament to the customer-first ethos, unwavering integrity and transparency powering progress.</p>
                 <div className='line'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* count design */}
      <div className='section-two count-design'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='timeline-sub-heading'>
                  <h2>Co-shaping India's Infrastructure <br/>Resilience & Readiness</h2>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='timeline-paragrap'>
                <p className='justify'>As a leading provider of innovative and reliable MEP solutions, VK Building Services Pvt. Ltd. empowers clients to achieve remarkable success and growth. Our mission is to design sustainable and efficient systems that serve as the backbone of thriving businesses. We are dedicated to ensuring their future prosperity and resilience in an ever-changing world. Together, we are co-shaping India’s infrastructure for a better tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* {our story} */}

       <div className='section two-left'>
        <div className='container'>
        {/* <div className='space5'></div> */}
          <div className='row'>
            <div className='col-lg-6'>
              <h3 className='innerTwoH3'>Our Story</h3>
              <div className='inner-two'>
               
                <p style={{color:"#8B8E8f"}} className='justify'>VK Building Services (VKBS) was founded with a mission to improve India's infrastructure through quality engineering, customer focus, sustainability, and ethical practices. These values have guided the company’s growth from the start and remain key to its success.
                </p>
                <p style={{color:"#8B8E8f"}} className='justify'>Over the past two decades, VKBS has worked on major MEP (Mechanical, Electrical, and Plumbing) projects for both public and private clients, including green buildings and metro rail projects. The company has built strong, long-term relationships with clients who trust its dedication to delivering high-quality projects.
                </p>
                {/* <p  style={{color:"#8B8E8f"}}>
                <span id="dots">...</span><span id="more" style={{display:"none"}}>
                  <p style={{color:"#8B8E8f"}} className='justify'>We believe in fostering long-term relationships, evident through repeat orders from satisfied clients who acknowledge our sincere efforts in every project.                                                 
                  </p>

                    <p style={{color:"#8B8E8f"}} className='justify'>In our quest to stay ahead of the curve and meet the demands of the evolving industry landscape, we have executed over 1000 innovated system rollouts and pioneered MEP Prefab solutions to help our clients achieve better outcomes. The 50+ awards including Asia's Most Promising MEP Brand 2021, 1400+ workforce competency hours monthly, successful migration of 800+ outdated electrical substations, and verified PUE achievement of 1.32 across 4 Uptime Tier III certified facilities reinforce our commitment to pushing the frontiers.</p>
                  </span> &nbsp;<span onClick={myFunction} id="myBtn">Read more</span>
                </p> */}
               
              </div>
            </div>
            <div className='col-lg-6'>
              <img src='/images/vkbs-logo.png' className='bg-exp-data' alt='' />
            </div>
          </div>
        </div>
       </div>


      {/* count design */}
        <div className='section-two count-design'>
        <div className='container text-center'>
          <div className='row px-2'>

            <div className='col-lg-3 col-6 border'>
              <div className='count-inner '>
                  <h2>{Offices}</h2>
               
                <p>Regional Offices</p>
              </div>
            </div>

            <div className='col-lg-3 col-6'>
              <div className='count-inner'>
                  <h2>{ProjectState}</h2>
                <p>State Project</p>
              </div>
            </div>
            <div className='col-lg-3 col-6 border borderTop'>
              <div className='count-inner'>
                  <h2>{ProjectsDelevred} <span>Million Sq.Ft</span></h2>
                <p>Projects delivered</p>
              </div>
            </div>

            <div className='col-lg-3 col-6 borderTop'>
              <div className='count-inner-4'>  
                  <h2>$ {EmpPRojects} <span style={{fontSize:"15px"}}>Million</span> </h2>
                <p>MEP projects </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Guiding Principles */}
        <div className='section two-right'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <img src='/images/guidline.jpg' className='bg-exp-data' alt='' />
            </div>
            <div className='col-lg-6'>
              <div className='inner-two'>
                <h3>Guiding Principles</h3>
               <p className='justify' style={{fontSize:"18px"}}><b style={{
    fontWeight: "700", color: "#303030"}}>Vision : </b>Pioneering MEP Excellence With World Class Engineering & Design</p>
               <p className='justify' style={{fontSize:"18px", marginTop:"10px"}}><b style={{
    fontWeight: "700", color: "#303030"}}>Mission : </b>Progress Through Innovation, Transparency, Safety, Sustainability, Growth, and Respect</p>
              </div>
            </div>
          </div>
        </div>
        </div>
 
         {/* TimeLine Component */}
         <div className="desktop-only">
          <TimeLine />
         </div>
         <div className="mobile-only">
          <TimeLineMobile />
         </div>
        
    </>
  )
}
