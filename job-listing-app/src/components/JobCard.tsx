import type { Job } from "../types/job";
import { Link } from "react-router-dom";

type JobCardProps = {
  job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
  const slug = job.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link to={`/dashboard/${slug}`}>
      <div className="my-8 px-8 py-4 border border-gray-200 rounded-xl  shadow-md">
        <div className="flex gap-4">
          <img
            src={job.image}
            alt={job.image}
            className="w-24 h-24 object-cover rounded-lg "
          />

          <div className="flex flex-col flex-1">
            <h4 className="font-bold text-slate-800 text-lg">{job.title}</h4>
            <span className="text-gray-500 text-sm mb-3">
              {job.company} • {job.about.location}
            </span>

            <p className="mt-3 text-sm text-slate-700">{job.description}</p>

            <div className="flex flex-wrap my-4">
              {job.about.categories.map((category: string) => (
                <span
                  key={category}
                  className="px-4 py-1 mr-2 mb-2 text-orange-300 border border-orange-300 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
