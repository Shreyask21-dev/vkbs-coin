import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { BASEPATH } from "@/config";
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import ProjectComponent from '@/components/ProjectCat';


export default function CategoryList({ CatSingle }) {

  // console.log("projectCategories", CatSingle)
  return (
    <>
      {/* Hero banner design */}
      <div className='section inner-hero-banner project-hgt'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='inner-text'>
                <h1>Project</h1>
                <p> Let us know how we can help you with your existing or future projects</p>
                <div className='line'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='project-title' id="id">
        <div className='container'>
          <h2>Projects</h2>
        </div>
      </div>

  
      <div className='container project-page-new'>
        <div className='row'>
          <div className='col-lg-3' >
            <ProjectComponent />
          </div>

          <div className='col-lg-9'>
           
            <div className='row' >

              {
                CatSingle?.data?.projectCategory?.projects?.nodes.map((item, index) => (
                  <>
                    <div className='col-lg-6' key={index}>
                      <div className="inner-card-pr">
                        <img src={item?.featuredImage?.node?.guid} alt="img" />
                        <h3>{item.title}</h3>
                        {console.log("item--->", item)}
                        <div dangerouslySetInnerHTML={{ __html: `${item?.excerpt}`, }}></div>
                        <Link href={`/project/${item.slug}/`} type="button" className="mt-2 btn btn-primary btn-rounded btn-lg">
                          View Projects
                        </Link>
                      </div>
                    </div>
                  </>
                ))
              }

            </div>
          </div>
        </div>
      </div>
     
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
        projectCategories(first: 10) {
          nodes {
            count
            name
            slug
          }
        }
      }
           `,
    }),
  });
  const pageResut = await pageAPI.json();
  const paths = pageResut.data.projectCategories.nodes.map((list) => ({
    params: { slugcat: list.slug },
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
        projectCategory(id: "${params.slugcat}", idType: SLUG) {
          name
          slug
          count
          projects {
            nodes {
              excerpt
              title
              slug
              featuredImage {
                node {
                  guid
                }
              }
            }
          }
        }
      }
        `,
    }),
  });

  const CatSingle = await resultData.json();


  return {
    props: {
      CatSingle,

    },
    revalidate: 10,
  };
}
