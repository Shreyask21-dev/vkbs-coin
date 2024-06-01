import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import TimeLine from '@/components/TimeLine'
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
      <div className='section inner-hero-bannerOurStory'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='inner-text'>
                <h1>Building MEP Systems for a New Era of Possibilities</h1>
                <p>Over 20 years of sustained partnerships with over 1000 clients, a testament to the customer-first ethos, unwavering integrity and transparency powering progress.</p>
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
                <p>Leveraging engineering expertise and industry leading quality benchmarks, we have delivered over 65 million sq ft of executed projects, spanning diverse infrastructure from data centers to residential spaces, VKBS translates evolving operational needs into cost-effective, sustainable MEP solutions generating long-term asset value through intelligent design.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* {our story} */}

       <div className='section two-left'>
        <div className='container'>
        <div className='space5'></div>
          <div className='row'>
            <div className='col-lg-6'>
              <h3>Our Story</h3>
              <div className='inner-two'>
               
                <p style={{color:"#8B8E8f"}}>Established in 2005 by industry veterans and visionaries who believed India deserves better, VK Building Services was founded on the principles of engineering excellence, customer commitment, sustainable thinking and ethical conduct - tenets that continue to determine growth even today.</p>
                <p style={{color:"#8B8E8f"}}>Over decades, 1000+ clients ranging from public sector giants to private majors have placed faith in VKBS to successfully manifest ambitious MEP engineering projects with demanding prerequisites including some of India's first platinum rated green campuses, rapid metro rail electrifications, remote smart city ecosystem rollouts and more.</p>
                <p  style={{color:"#8B8E8f"}}>
                <span id="dots">...</span><span id="more" style={{display:"none"}}>
                  <p style={{color:"#8B8E8f"}}>But meaningful partnerships thrive not by catering to collective comfort but shared aspirations. And the vision driving VKBS remains far-reaching - to transform the potential of emerging infrastructure by raising benchmarks.</p>

                    <p style={{color:"#8B8E8f"}}>In all, we have successfully executed over 1000 innovated system rollouts, 50+ awards including Asia's Most Promising MEP Brand 2021, 1400+ workforce competency hours monthly, successful migration of 800+ outdated electrical substations, and verified PUE achievement of 1.32 across 4 Uptime Tier III certified facilities reinforce our commitment to pushing frontiers.</p>
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
          <div className='row'>

            <div className='col-lg-3'>
              <div className='count-inner '>
                  <h2>{Offices}</h2>
               
                <p>Regional Offices</p>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className='count-inner'>
                  <h2>{ProjectState}</h2>
                <p>State Project</p>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='count-inner'>
                  <h2>{ProjectsDelevred} Mn <span>Sq.Ft</span></h2>
                <p>Projects delivered</p>
              </div>
            </div>

            <div className='col-lg-3'>
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
               <p>Change starts from within. Thus our ethos embraces imbibing quality consciousness into work routines through training plus incentive frameworks focused on mindset evolution.</p>
               <p>We believe uplifting lives begins by mitigating risks - be it discontinued critical infrastructure operations or physiological threats. Hence preparedness and continuity planning feature prominently across system design.</p>
                <p>By pioneering data-driven innovation to help infrastructure keep pace with the width of India's needs - be it rolling out rapid slum electrifications or monitoring the conduct of renewable assets, VKBS continuously expands its expertise to deliver differently.</p>
                <p>Operational challenges can seem abstract unless visualized granularly. Our commitment stays to simplify complex interconnected engineering intricacies into understandable translated outcomes spanning the now and near future.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
 
         {/* TimeLine Component */}
         <TimeLine/>
        
    </>
  )
}
