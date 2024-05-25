import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { BASEPATH } from "@/config";
import { useRouter } from 'next/router'
import { useState , useEffect } from 'react';

const ProjectComponent = () => {
  const [projectData, setProjectData] = useState(null);
  const router = useRouter();
  var LiveUrl = router.asPath;

  console.log("LiveUrl--->" ,LiveUrl)
 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`${BASEPATH}graphql`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
            query NewQuery {
                projectCategories {
                  nodes {
                    count
                    slug
                    name
                  }
                }
              }
            `,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProjectData(data.data.projectCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    };

    fetchProjectData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!projectData) {
    return <div className='text-center'>Loading...</div>;
  }

  return (
    <div>
      {/* Render your project data here */}
      {projectData.nodes.map((item) => (
        <>
        <div className='project-url'>
        <ul>
          <li key={item.slug}> 
             <Link className={`nav-link ${LiveUrl == `/project/category/${item.slug}/#id` ? 'active line-2' : ''}`} href={`/project/category/${item.slug}/#id`}>{item.name} </Link>
          </li>
         
        </ul>
        </div>
        </>
      ))}
    </div>
  );
};

export default ProjectComponent;
