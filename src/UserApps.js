import React, {useContext, useState, useEffect} from 'react';
import UserContext from './UserContext';
import JobList from './JobList';
import api from './api';


const UserApps = () => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useContext(UserContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobInfo() {
      let jobInfo = [];
      for await (let jobId of user.applications) {
        const job = await api.getJob(jobId);
        jobInfo.push(job);
      }
      setJobs(jobInfo);
    }
    getJobInfo();
    setIsLoading(false);
  }, []);

  //show "loading" while API call is made
  if (isLoading) return <h1>Loading</h1>;

  return (
    <JobList jobs={jobs} />
  )
}

export default UserApps;