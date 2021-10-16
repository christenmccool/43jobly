import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './CompanyDetail.css'
import JoblyApi from './api';
import JobList from './JobList';

/** CompanyDetail component for Jobly app
 * Displays company name, description, and a list of JobCard components for the company.
 * 
 * Renders "loading" while the API call is being performed
 * On mount, renders a JobCard for each of a company's job listings
 */

const CompanyDetail = ({apply}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState(null);

  const {handle} = useParams();

  //calls the API to obtain a company's data, including all of its job listings
  useEffect(() => {
    async function getCompany(handle) {
      const company= await JoblyApi.getCompany(handle);
      setCompany(company);

      setIsLoading(false);
    }
    getCompany(handle);
  }, [handle]);

  //show "loading" while API call is made
  if (isLoading) return <h1>Loading</h1>;

  //after async API call is complete, render a JobList of all of a company's jobs
  return (
    <div>
      <h1 className="CompanyDetail-name">{company.name}</h1>
      <p className="CompanyDetail-description">{company.description}</p>
      <JobList jobs={company.jobs} apply={apply}/>
    </div>
  )
}

export default CompanyDetail;