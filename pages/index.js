import React from 'react'
import Link from 'next/link'
import Head from 'next/head';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useState, useEffect } from 'react';

export default function HomePage() {

  const [value, setValue] = useState(0);
  const [price , setprice] = useState(0);
  const [team , setteam] = useState(6000);
  const [stateList , setStateList] = useState(0);

  // Function to increment the value
  const incrementValue = () => {
    setValue(prevValue => {
      if (prevValue < 346) {
        return prevValue + 1;
      } else {
        return prevValue;
      }
    });
  };

  useEffect(() => {
    const intervalId = setInterval(incrementValue, 1); 
    return () => clearInterval(intervalId); 
  }, []); 


    // Function to increment the price
    const incrementValue2 = () => {
      setprice(prevValue => {
        if (prevValue < 300) {
          return prevValue + 1;
        } else {
          return prevValue;
        }
      });
    };

    useEffect(() => {
      const intervalId = setInterval(incrementValue2, 1); 
      return () => clearInterval(intervalId); 
    }, []);
 

    // Function to increment the price
    const incrementValue3 = () => {
      setteam(prevValue => {
        if (prevValue < 6500) {
          return prevValue + 1;
        } else {
          return prevValue;
        }
      });
    };

    useEffect(() => {
      const intervalId = setInterval(incrementValue3, 0.5); 
      return () => clearInterval(intervalId); 
    }, []);


     // Function to increment the price
     const incrementValue4 = () => {
      setStateList(prevValue => {
        if (prevValue < 17) {
          return prevValue + 1;
        } else {
          return prevValue;
        }
      });
    };

    useEffect(() => {
      const intervalId = setInterval(incrementValue4, 1); 
      return () => clearInterval(intervalId); 
    }, []);

    
 
  
  return (
    <>
    <Head>
      <title>VKBS</title>
    </Head>



      {/* Hero banner design */}
      <div className='section herobanner'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='inner-text'>
                <h1>Welcome To India's <br /> leading MEP Engineering & Contracting Company</h1>
                <p className='poppins'>Delivering Quality With Innovation Since 2005</p>
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
              <div className='count-inner counter-center'>
                <div className='d-flex'>
                  <img src='/images/building.png' width='40' height='50' alt='' />
                  <h2>{value}Mn <span>Sq.Ft</span></h2>
                </div>
                <p className='mt-n1'>MEP Projects Delivered</p>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className='count-inner counter-center'>
                <div className='d-flex'>
                  {/* <img src='/images/building.png' width='50' height='62' alt=''/> */}
                  <h2>$ {price}Mn </h2>
                </div>
                <p className='mt-n1'>MEP Projects Completed</p>
              </div>
            </div>


            <div className='col-lg-3'>
              <div className='count-inner counter-center'>
                <div className='d-flex'>
                  <img src='/images/man.png' width='45' height='50' alt='' />
                  <h2>{team}</h2>
                </div>
                <p className='mt-n1'>Team Strength</p>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className='count-inner-4 counter-center'>
                <div className='d-flex'>
                  <img src='/images/location.png' width='30' height='40' alt='' />
                  <h2>{stateList} States</h2>
                </div>
                <p className='mt-n1'>Ongoing & Completed Projects </p>
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
              <img src='/images/building.jpg' className='bg-exp-data' alt='' />
            </div>
            <div className='col-lg-6'>
              <div className='inner-two'>
                <h6>What We do</h6>
                <h3>Turnkey MEP Solutions</h3>
                <p>VK Building Services Pvt. Ltd. are the fastest growing MEP Contracting Company providing Turnkey solutions - from concept to commissioning in critical MEP Projects across key sectors. With a customer focused approach, an innovative culture and the ability to respond positively to challenging requirements, we have served over 1000+ satisfied clients. Sustainability and inclusive growth are embedded in our vision and strategic plans....</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Our Solutions */}

      <div className='section solution-slider'>
        <div className='container'>
          <div className='section-slider'>
            <h6>what we do</h6>
            <h5>Our Solutions</h5>
            <div className='space5'></div>
            <Splide
                        options={{
                            perPage: 4,
                            breakpoints: {
                                991: {
                                    perPage: 3,
                                },
                                767: {
                                    perPage: 2,
                                },
                                640: {
                                    perPage: 1,
                                },
                            },
                            rewind: true,
                            autoplay: true,
                            interval: 6000,
                            // type: 'fade',
                            // speed: 2200
                        }}
                        aria-label="customList">
                        <SplideSlide>
                            <div className="solution-item solution-one">
                                <img src="/images/soution-icon-1.png" alt="partners_logo"
                                    className="img-responsive" />
                                    <div className='solu-heading-tag'>Our MEP Services</div>
                                    <span className='readMore'><a href="/mechanical/#m">Read More → </a></span>
                            </div>
                        </SplideSlide>
                     

                        <SplideSlide>
                            <div className="solution-item solution-one">
                                <img src="/images/solution-Icon-2.png" alt="partners_logo"
                                    className="img-responsive" />
                                     <div className='solu-heading-tag'>Integrated MEP <br/>Contracting</div>
                                      <span className='readMore'><a href="/after-sales">Read More → </a></span>

                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className="solution-item solution-one">
                                <img src="/images/solution-icon-three.png" alt="partners_logo"
                                    className="img-responsive" />
                                     <div className='solu-heading-tag'>Pre Fabrication</div>
                                    <span className='readMore'><a href="/prefabrication">Read More → </a></span>

                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className="solution-item solution-one">
                                <img src="/images/solution-con-four.png" alt="partners_logo"
                                    className="img-responsive" />
                                     <div className='solu-heading-tag'>Retrofitting Services</div>
                                    <span className='readMore'><a href="/industries">Read More → </a></span>

                            </div>
                        </SplideSlide>

            </Splide>
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
                <div className='space5'></div>
                <h3>Pre-Fabrication</h3>
                <div className='space5'></div>
                <p className='paragraph'>Reimagining onsite execution, VKBS revolutionizes MEP services by integrating manufacturing excellence through pre-fabrication for rapid assembly of defect-free modular components.. Our pioneering template-driven prefab techniques integrate innovation with quality and safety to fast-track projects and maximize customer delight.</p>
                <Link href='/prefabrication'
                  type="button"
                  className="mt-2 btn btn-primary btn-rounded btn-lg">
                  Know More
                </Link>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src='/images/left.jpg' className='bg-exp-data' alt='' />
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
              <Link href='/project/category/commercial/#id'
                type="button"
                className="mt-2 btn btn-primary btn-rounded btn-lg">
                View All Projects
              </Link>
            </div>
          </div>
          <div className='space10'></div>
          <div className='row'>
         
          <div className='col-lg-3 '>
            <div className='bg-exp-data bg-exp-1'>
            <div className='inner-data-cont'>
              <h6 className='headingProjectSub'>DATA Center</h6>
              <h3 className='headingProjects'>Byte Datacentres (Mumbai) LLP</h3>
              <p className='headingProjectSub'>Digha, New Mumbai</p>
              <Link href='/project/byte-datacentres-mumbai-llp/'
                type="button"
                className="mt-2 btn btn-primary-two  btn seeMore">
                View More
              </Link>
              </div>
            </div>
           </div>

           <div className='col-lg-3 '>
            <div className='bg-exp-data bg-exp-2'>
              <div className='inner-data-cont'>
              <h6 className='headingProjectSub'>Infrastructure</h6>
              <h3 className='headingProjects'>Pune Airport</h3>
              <p className='headingProjectSub'>Pune</p>
              <Link href='/project/pune-airport/'
                type="button"
                className="mt-2 btn btn-primary-two  btn seeMore">
                View More
              </Link>
              </div>
            </div>
           </div>

           <div className='col-lg-3 '>
            <div className='bg-exp-data bg-exp-3'>
            <div className='inner-data-cont'>
              <h6 className='headingProjectSub'>Infrastructure</h6>
              <h3 className='headingProjects'>GMRCL Surat Metro</h3>
              <p className='headingProjectSub'>Surat, Gujrat</p>
              <Link href='/project/gmrcl-surat-metro/'
                type="button"
                className="mt-2 btn btn-primary-two btn seeMore">
                View More
              </Link>
              </div>
            </div>
           </div>

           <div className='col-lg-3 '>
            <div className='bg-exp-data bg-exp-4'>
            <div className='inner-data-cont'>
              <h6 className='headingProjectSub'>Commercial</h6>
              <h3 className='headingProjects'>IMCC IT Park, Mumbai</h3>
              <p className='headingProjectSub'>Ghansoli, Navi Mumbai</p>
              <Link href='/project/imcc-it-park-mumbai/'
                type="button"
                className="mt-2 btn btn-primary-two btn seeMore">
                View More
              </Link>
              </div>
            </div>
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
                <p className='paragraph'>Our MEP services are powered by Centre of Excellence, Project Control Department, stringent 4-Level Monitoring governance, and Transition Task Force, ensuring seamless integration across project lifecycles. This unified alignment of cross-functional expert teams results in optimized outcomes by collectively driving adherence to critical success benchmarks - safety, quality, timely delivery and perfection - across the entirety of Mechanical, Electrical and Plumbing solutions.</p>
                <Link href='/mechanical/#m'
                  type="button"
                  className="mt-2 btn btn-primary btn-rounded btn-lg">
                  Know More
                </Link>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src='/images/grop-vkbs.png' className='bg-exp-data' alt='' />
            </div>
          </div>
        </div>
      </div>


      {/* Quality */}

      <div className='section quality'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
            <img src='/images/pipe.jpg' className='bg-exp-data' alt='' />
            </div>
            <div className='col-lg-6'>
            <div className='inner-two'>
                <h6>why us</h6>
                <h3 style={{fontWeight:"600", lineHeight:"50px"}}>Unwavering Commitment to Quality Delivery</h3>
                <p className='paragraph'>With over 65 million square feet of MEP projects executed, 2 million square feet of EPC development encompassing 2000+ residential units, 6,00,000 square feet of specialized fit-outs and delivery of 2,00,000+ square feet A-grade workspaces - VKBS offers unrivaled competencies spanning integrated design-build services, project management and quality-focused sustainable execution of complex mechanical, electrical and plumbing solutions pan-India, making us the industry's most trusted one-stop MEP services provider.</p>
          
                <Link href='/contact-us'
                  type="button"
                  className="mt-2 btn btn-primary btn-rounded btn">
                  Contact Us
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>


{/* client logo */}

    
      <div className='section customlist-section'>
                <div className='container'>
                    <h2 className='primary-text'>Trusted by more than <span>30,000</span> companies</h2>
                    <Splide
                        options={{
                            perPage: 5,
                            breakpoints: {
                                991: {
                                    perPage: 3,
                                },
                                767: {
                                    perPage: 2,
                                },
                                640: {
                                    perPage: 1,
                                },
                            },
                            rewind: true,
                            autoplay: true,
                            interval: 6000,
                            // type: 'fade',
                            // speed: 2200
                        }}
                        aria-label="customList">
                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="/images/cisco-logo.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="/images/net-app-logo.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="/images/sify.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="/images/hp.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="/images/ibm.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="/images/hp.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>
                     
                      
                     
                         
                    </Splide>
                </div>
     </div> 


    </>
  )
}


