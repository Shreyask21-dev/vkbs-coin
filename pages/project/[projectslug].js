import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { BASEPATH } from "@/config";
import ProjectComponent from '@/components/ProjectCat';

export default function InnerProjectPage({ projectSingle }) {

    

    const [setProjectName, getProjectName] = useState([])
    const router = useRouter();
    var LiveUrl = router.asPath;

  console.log("projectSingle--->" , projectSingle)

    if (projectSingle?.data?.project !== null) {
        return (
            <>
                <Head>
                    <title>{projectSingle?.data?.project?.title}</title>
                    <link rel="stylesheet" href={`https://vkbs.coinage.host/wp-content/uploads/elementor/css/post-${projectSingle?.data?.project?.projectId}.css`} media="all" />
                </Head>

                <div className='section inner-hero-banner project-hgt'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className='inner-text'>
                                    <h1 className='innerTwoH3'>Projects</h1>
                                    <p> Elevating environments showcasing our company's signature projects</p>
                                    <div className='line'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='project-title'>
                    <div className='container'>
                        <h2 className='innerTwoH3'>Projects</h2>
                    </div>
                </div>


                
                    <div className='container project-page-new'>

                        <div className='row project-bg'>
                            <div className='col-lg-3'>
                                <ProjectComponent/>
                            </div>
                            <div className='col-lg-9'>

                                <div className="inner-page-pr-data">
                                    <h3> {projectSingle?.data?.project?.title} </h3>
                                      <div className='thumb-img'>
                                        <img src={projectSingle?.data?.project?.featuredImage?.node?.guid} />
                                      </div>
                                    {projectSingle?.data?.project?.content !== null && (
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: `${projectSingle?.data?.project?.content}`,
                                            }}
                                        ></div>
                                    )}
                                    <h6>Project Highlights :</h6>
                               
                                     <div className='d-flex column'>
                                        <div className='col-sm-6 col-12'><h5>Area : <strong>{projectSingle?.data?.project?.projectacflist?.area} </strong></h5></div>
                                        <div className='col-lg-6 col-12'><h5>Equipment Capacity : <strong>{projectSingle?.data?.project?.projectacflist?.equipmentCapacity}</strong></h5></div>
                                    </div>
                                    <div className='d-flex column'>
                                        <div className='col-lg-6 col-12'><h5>Consultant : <strong>{projectSingle?.data?.project?.projectacflist?.consultant}</strong></h5></div>
                                        <div className='col-lg-6  col-12'><h5>Location : <strong>{projectSingle?.data?.project?.projectacflist?.location}</strong></h5></div>
                                        </div>

                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='space5'></div>
                
            </>
        )
    }
}




export async function getStaticPaths() {
    const pageAPI = await fetch(`${BASEPATH}graphql`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
            query NewQuery {
                projects {
                  nodes {
                    title
                    uri
                    slug
                  }
                }
              }
             `,
        }),
    });
    const projectResut = await pageAPI.json();
    const paths = projectResut.data.projects.nodes.map((list) => ({
        params: { projectslug: list.slug },
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
              project(id: "${params.projectslug}" ,idType: URI) {
                projectId
                slug
                title
                content
                excerpt
                featuredImage {
                    node {
                      guid
                    }
                  }
                  projectacflist {
                    area
                    consultant
                    equipmentCapacity
                    fieldGroupName
                    location
                  }
              }
            }
          `,
        }),
    });

    const projectSingle = await resultData.json();
    return {
        props: {
            projectSingle,
        },
        revalidate: 10,
    };
}

