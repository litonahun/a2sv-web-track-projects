import JobCard from "./JobCard";
import jobsData from "../data/jobs.json";
import type { Job } from "../types/job";

const JobList = () => {
  return (
    <div className="py-12 pl-50  grid grid-cols-3">
      <div className="col-span-2">
        <h1 className="text-2xl font-bold text-slate-800">Opportunities</h1>
        <span className="text-gray-400 text-sm">Showing 73 results</span>

        {jobsData.job_postings.map((job: Job) => (
          <JobCard job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
