import React, {useState, useEffect} from 'react';
import JoblyApi from './api';
import JobList from './JobList';
import "./JobPage.css";

const JobPage = ({apply}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState(null);
  
  //display all jobs on mount
  useEffect( () => {
    async function getJobs() {
      const jobs = await JoblyApi.getJobs();

      setJobs(jobs);
      setIsLoading(false);
    }
    getJobs();
  }, []);

  //search bar is a controlled component
  const handleChange = (evt) => {
    setSearch(evt.target.value);
  }

  //API call with name filter when search is submitted
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const jobs = await JoblyApi.getJobs(search);
    setJobs(jobs);
    setSearch("");
  }

  //search bar reset to empty string and job list to all jobs
  const handleClear = async (evt) => {
    const jobs = await JoblyApi.getJobs();
    setJobs(jobs);
    setSearch("");
  }

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div className="JobPage">
      <form className="JobPage-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="search" 
          placeholder="Enter search term." 
          value={search} 
          onChange={handleChange}
        />

        <button type="submit" className="JobPage-submit-btn">
          Submit
        </button>
        
        <button type="button" className="JobPage-clear-btn" onClick={handleClear}>
          Clear
        </button>
      </form>

      <JobList jobs={jobs} apply={apply}/>
    </div>
  )
}

export default JobPage;