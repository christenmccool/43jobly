import React, {useState, useEffect} from 'react';
import JoblyApi from './api';
import CompanyCard from './CompanyCard';



const CompanyList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      const companies = await JoblyApi.getCompanies();
      setCompanies(companies);

      setIsLoading(false);
    }
    getCompanies();
  }, []);

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div>
      { companies.map(company => <CompanyCard company={company}/>) }
    </div>
  )
}

export default CompanyList;