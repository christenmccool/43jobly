import React from 'react';
import './JobCard.css';

/** JobCard component for Jobly app
 * Renders a card displaying the job title, salary, and equity
 */

const JobCard = ({title, salary, equity}) => {
  return (
    <div className="JobCard">
      <h1 className="JobCard-title">{title}</h1>
      <p className="JobCard-info">Salary: {salary}</p>
      <p className="JobCard-info">Equity: {equity}</p>

    </div>
  )
}

export default JobCard;