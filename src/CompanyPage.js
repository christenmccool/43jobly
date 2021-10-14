import React, {useState, useEffect} from 'react';
import JoblyApi from './api';
import CompanyCard from './CompanyCard';
import './CompanyPage.css';

/** CompanyList component for Jobly app
 * Renders "loading" while the API call is being performed
 * On mount, renders a CompanyCard for every company in the database
 * 
 * Search filters by company name, displaying a CompanyCard for each company returned
 * Clear resets the search bar to an empty string and renders a CompanyCard for every company in the database
 */

const CompanyPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [companies, setCompanies] = useState([]);

  //display all companies on mount
  useEffect(() => {
    async function getCompanies() {
      const companies = await JoblyApi.getCompanies();
      setCompanies(companies);

      setIsLoading(false);
    }
    getCompanies();
  }, []);

  //search bar is a controlled component
  const handleChange = (evt) => {
    setSearch(evt.target.value);
  }

  //API call with name filter when search is submitted
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const companies = await JoblyApi.getCompanies(search);
    setCompanies(companies);
    setSearch("");
  }

  //search bar reset to empty string and company list to all companies
  const handleClear = async (evt) => {
    const companies = await JoblyApi.getCompanies();
    setCompanies(companies);
    setSearch("");
  }

  //show "loading" while API call is made
  if (isLoading) return <h1>Loading</h1>;

  //after async API call is complete, render a list of all companies
  return (
    <div className="CompanyPage">
      <form className="CompanyPage-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="search" 
          placeholder="Enter search term." 
          value={search} 
          onChange={handleChange}
        />

        <button type="submit" className="CompanyPage-submit-btn">
          Submit
        </button>
        
        <button type="button" className="CompanyPage-clear-btn" onClick={handleClear}>
          Clear
        </button>
      </form>
      
      <div>
        { companies.map(company => 
          <CompanyCard 
            handle={company.handle}
            name={company.name} 
            logoUrl={company.logoUrl} 
            description={company.description} 
            key={company.handle}
        />) }
      </div>
    </div>
  )
}

export default CompanyPage;