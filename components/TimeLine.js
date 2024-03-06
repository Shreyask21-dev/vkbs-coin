import React from 'react'
import Link from 'next/link'


export default function TimeLine() {

  const events = [
    { year: 2001, event: 'Event 1' },
    { year: 2003, event: 'Event 2' },
    { year: 2005, event: 'Event 3' },
    { year: 2008, event: 'Event 4' },
    { year: 2010, event: 'Event 5' },
  ];
  return (
    <>
    <div className='timeline-section timeline'>
     <div className='container'>
        <h2 className='text-center'>Company Timeline</h2>
         <div className='space10'></div>
          <div className='time-line'>
            <img src='/images/time-img.png' alt='' />
          </div>
     </div>
    </div>

    <div className='container-base'>
      <h1>Vertical Timeline</h1>
      <div className='timeline'>
        {events.map((event, index) => (
          <div key={index} className='timelineItem'>
            <div className='timelineYear'>{event.year}</div>
            <div className='timelineContent'>{event.event}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
