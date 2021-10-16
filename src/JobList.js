import React from 'react';
import JobCard from './JobCard';

/** JobList component for Jobly app
 * Renders a list of JobCards given a jobs list prop
 */

const JobList = ({jobs, apply}) => {
  
  return (
    <div className="JobList">
      {jobs.map(job => 
        <JobCard 
          title={job.title} 
          salary={job.salary} 
          equity={job.equity} 
          id={job.id}
          key={job.id}
          companyName={job.companyName || null}
          companyHandle={job.companyHandle || null}
          apply={apply}
        />
      )}
    </div>
  )
}

export default JobList;