import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "../../../components/JobCard/JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

const TabSection = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`);
      setJobs(data);
    };
    getData();
  }, []);
  return (
    <div className="w-max mx-auto py-5 font-poppins">
      <Tabs>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Graphic Design</Tab>
          <Tab>Digital Marketing</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5 ">
            {jobs
              .filter((job) => job.category === "Web Development")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5 ">
            {jobs
              .filter((job) => job.category === "Graphic Design")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5 ">
            {jobs
              .filter((job) => job.category === "Digital Marketing")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabSection;
