import React, {useState, useContext} from 'react';
import UserContext from './UserContext';
import {Link} from 'react-router-dom';
import './JobCard.css';

/** JobCard component for Jobly app
 * Renders a card displaying the job title, salary, and equity
 */

const JobCard = ({id, title, salary, equity, companyHandle, companyName, apply}) => {
  const user = useContext(UserContext);
  const initialApplied = user ? user.applications.indexOf(id) !== -1 : false;
  const [applied, setApplied] = useState(initialApplied);

  const handleClick = () => {
    apply(id);
  }

  const appElem = applied ? 
                    <button className="JobCard-btn JobCard-applied" disabled>Applied</button> :
                    <button className="JobCard-btn JobCard-apply-btn" onClick={handleClick}>Apply</button>

  return (
    <div className="JobCard">
      <div>
        <h1 className="JobCard-title">{title}</h1>
        {apply? appElem : null}
      </div>
      {companyName ? <Link exact to={`/companies/${companyHandle}`}><span className="JobCard-subtitle">{companyName}</span></Link> : null}
      <p className="JobCard-info">Salary: {salary}</p>
      <p className="JobCard-info">Equity: {equity}</p>
    </div>
  )
}

export default JobCard;