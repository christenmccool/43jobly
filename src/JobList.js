import React from 'react';
import JobCard from './JobCard';

/** JobList component for Jobly app
 * Renders a list of JobCards given a jobs list prop
 */

const JobList = ({jobs}) => {
  
  return (
    <div className="JobList">
      {jobs.map(job => 
        <JobCard 
          title={job.title} 
          salary={job.salary} 
          equity={job.equity} 
          key={job.id}
        />
      )}
    </div>
  )
}

export default JobList;