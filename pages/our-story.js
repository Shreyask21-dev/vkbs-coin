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
      if(prevalue < 65 ){
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
                <p className='justify'>We are the leading provider of innovative and reliable MEP solutions, empowering our clients to achieve unparalleled success and growth. We strive to create sustainable and efficient systems that form the backbone of thriving businesses, ensuring their future prosperity and resilience in a rapidly evolving world.
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
               
                <p style={{color:"#8B8E8f"}} className='justify'>Established in 2005 by industry veterans and visionaries who believed India deserves better, VK Building Services was founded on the principles of engineering excellence, customer commitment, sustainable thinking and ethical conduct - tenets that continue to determine our growth even today.
                </p>
                <p style={{color:"#8B8E8f"}} className='justify'>Over the decades, customers ranging from public sector giants to private majors have placed faith in VKBS to successfully build ambitious MEP engineering projects with demanding prerequisites including some of India's first platinum rated green campuses, rapid metro rail electrifications, remote smart city ecosystem rollouts and more.
                </p>
                <p  style={{color:"#8B8E8f"}}>
                <span id="dots">...</span><span id="more" style={{display:"none"}}>
                  <p style={{color:"#8B8E8f"}} className='justify'>We believe in fostering long-term relationships, evident through repeat orders from satisfied clients who acknowledge our sincere efforts in every project.                                                 
                  </p>

                    <p style={{color:"#8B8E8f"}} className='justify'>In our quest to stay ahead of the curve and meet the demands of the evolving industry landscape, we have executed over 1000 innovated system rollouts and pioneered MEP Prefab solutions to help our clients achieve better outcomes. The 50+ awards including Asia's Most Promising MEP Brand 2021, 1400+ workforce competency hours monthly, successful migration of 800+ outdated electrical substations, and verified PUE achievement of 1.32 across 4 Uptime Tier III certified facilities reinforce our commitment to pushing the frontiers.</p>
                  </span> &nbsp;<span onClick={myFunction} id="myBtn">Read more</span>
                </p>
               
              </div>
            </div>
            <div className='col-lg-6'>
              <img src='/images/timeline-industry.jpg' className='bg-exp-data' alt='' />
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
                  <h2>{ProjectsDelevred} Mn <span>Sq.Ft</span></h2>
                <p>Projects delivered</p>
              </div>
            </div>

            <div className='col-lg-3 col-6 borderTop'>
              <div className='count-inner-4'>  
                  <h2>$ {EmpPRojects}Mn</h2>
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
               <p className='justify'>Change starts from within. Thus our ethos embraces imbibing quality consciousness into work routines through training plus incentive frameworks focused on mindset evolution.</p>
               <p className='justify'>We believe uplifting lives begins by mitigating risks - be it discontinued critical infrastructure operations or physiological threats. Hence preparedness and continuity planning feature prominently across system design.</p>
                <p className='justify'>By pioneering data-driven innovation to help infrastructure keep pace with the width of India's needs - be it rolling out rapid slum electrifications or monitoring the conduct of renewable assets, VKBS continuously expands its expertise to deliver differently.</p>
                <p className='justify'>Operational challenges can seem abstract unless visualized granularly. Our commitment stays to simplify complex interconnected engineering intricacies into understandable translated outcomes spanning the now and near future.</p>
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
