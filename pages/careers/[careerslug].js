import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PopForm from '@/components/PopForm'
import { BASEPATH } from "@/config";

export default function CareersJobPage({ JobSingle }) {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCopyToClipboard = () => {
    const currentUrl = window.location.href; // Get the current page URL
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert("Current page URL copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy: ", err);
      alert("Failed to copy the URL. Please try again.");
    });
  };

  const objectForm = {
    location: JobSingle?.data?.career?.industryData?.location,
    experience : JobSingle?.data?.career?.industryData?.year,
    role :  JobSingle.data?.career?.title
  }
 


  console.log("JobSingle->" , JobSingle)
  
  return (
    <>
      <Head>
        <title>careers</title>
        <link rel="stylesheet" href={`https://vkbs.coinage.host/wp-content/uploads/elementor/css/post-${JobSingle?.data?.career?.careerId}.css`} media="all" />
      </Head>

      <div className='section  inner-hero-bannerCareer'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='inner-text'>
                <h1>Careers</h1>
                <p>Sub copy - Be a part of our story</p>
                <div className='line'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* inner pages design */}
      <div className='section-job section-carrers'>
        <div className='container'>
          <div className='arrow' onClick={() => router.back()}>
             <img src='/images/arrow.png' alt='back' />
          </div>
          <div className='row'>
            <div className='col-lg-9'>
            <div className='space5'></div>
              <h5 className='center'>{JobSingle?.data?.career?.industryData?.location}</h5>
              <div className='space5'></div>
              <h1 className='spaceH1'>{JobSingle.data?.career?.title}</h1>
              <div className='year-class'>
                <ul>
                  <li>Exp : {JobSingle?.data?.career?.industryData?.year}</li>
                  {/* <li>{JobSingle?.data?.career?.industryData?.mep}</li> */}
                </ul>
              </div>
            </div>
            <div className='col-lg-3'>
              <img src='/images/logo-carrer.png' alt='' />
            </div>
          </div>
        </div>
      </div>
         
      <div className='section-carrers-elemntor'>
        <div className='container'>
       <div className='job-elemento-decrip'>
          <div className='job-description' dangerouslySetInnerHTML={{__html: `${JobSingle.data?.career?.content}`}}></div>
       </div>
        </div>

      </div>
       
      <div className='section-job section-carrers-apply'>
        <div className='container'>
          <div className='apply-option d-flex'>
          <button onClick={handleOpenModal} className="mt-2 btn btn-primary btn-job-carrer"> Apply Now</button>
            <div className='share-link' onClick={handleCopyToClipboard} style={{cursor:"pointer"}}>
               <img src='/images/share.png' height='45' width='45' alt=''/>
            </div>
         </div>
        </div>
       </div>


       {showModal && (
        <div className='container'>
          <div className="modal-box">
          <div className="modal-content-box">
          <div className='model-head d-flex-model'>
          <h3>Please fill in details to proceed</h3>
            <img src='/images/close.png' className='closeIcon' alt='close' onClick={handleCloseModal}/>
          </div>
            <PopForm close={handleCloseModal} location={objectForm}/>
          </div>
        </div>
        </div>
      )}
       
       <div className='space5'></div>

    </>
  )
}



export async function getStaticPaths() {
  const pageAPI = await fetch(`${BASEPATH}graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
          query NewQuery {
            careers {
              nodes {
                slug
              }
            }
          }
           `,
    }),
  });
  const projectResut = await pageAPI.json();
  const paths = projectResut.data.careers.nodes.map((list) => ({
    params: { careerslug: list.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}




export async function getStaticProps({ params }) {
  const resultData = await fetch(`${BASEPATH}graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query NewQuery {
          career(id: "${params.careerslug}" ,idType: URI) {
             careerId
              slug
              title
              content
              excerpt
              industryData {
                location
                mep
                year
              }
            }
          }
        `,
    }),
  });

  const JobSingle = await resultData.json();
  return {
    props: {
      JobSingle,
    },
    revalidate: 10,
  };
}
