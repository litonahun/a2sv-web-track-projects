import { Check, MapPin, Calendar, Clock, Flame, Plus } from "lucide-react";
import jobsData from "../data/jobs.json";
import { useParams } from "react-router";

const IconCircle = ({
  icon: Icon,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => (
  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-3">
    <Icon className="w-4 h-4 text-gray-600" />
  </div>
);

const ApplicantsDashboard = () => {
  const { title } = useParams();
  const job = jobsData.job_postings.find(
    (job) => job.title.toLowerCase().replace(/\s+/g, "-") === title
  );

  return (
    <div className="py-12 px-20 grid grid-cols-4 gap-12">
      {/* LEFT SIDE */}
      <div className="col-span-3 ">
        {/* DESCRIPTION */}
        <div className="box">
          <h4 className="title">Description</h4>
          <p className="content">{job?.description}</p>
        </div>

        {/* RESPONSIBILITIES */}
        <div className="box">
          <h4 className="title">Responsibilities</h4>
          <ul className="space-y-4">
            {job?.responsibilities.map((resp, index) => (
              <li key={index} className="flex items-start">
                <IconCircle icon={Check} />
                <p className="text-slate-700 text-lg">{resp}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* IDEAL CANDIDATE */}
        <div className="box">
          <h4 className="title">Ideal Candidate we want</h4>
          <ul className="content space-y-1">
            <li>• Age: {job?.ideal_candidate.age}</li>
            <li>• Gender: {job?.ideal_candidate.age}</li>
            {job?.ideal_candidate.traits.map((trait, idx) => (
              <li key={idx}>• {trait}</li>
            ))}
          </ul>
        </div>

        {/* WHEN & WHERE */}
        <div className="box">
          <h4 className="title">When & Where</h4>
          <div className="flex items-start mt-4">
            <IconCircle icon={MapPin} />
            <p className="content">{job?.when_where}</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — SIDEBAR */}
      <div className="col-span-1 space-y-6">
        {/* ABOUT */}
        <div className="box border-b border-gray-300">
          <h4 className="title">About</h4>
          <ul className="space-y-4">
            <li className="list flex items-center">
              <IconCircle icon={Plus} />
              <div>
                <p className="text-gray-500 text-sm">Posted On</p>
                <p className="text-slate-900 text-sm">{job?.about.posted_on}</p>
              </div>
            </li>

            <li className="list flex items-center">
              <IconCircle icon={Flame} />
              <div>
                <p className="text-gray-500 text-sm">Deadline</p>
                <p className="text-slate-900 text-sm">{job?.about.deadline}</p>
              </div>
            </li>

            <li className="list flex items-center">
              <IconCircle icon={MapPin} />
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="text-slate-900 text-sm">{job?.about.location}</p>
              </div>
            </li>

            <li className="list flex items-center">
              <IconCircle icon={Calendar} />
              <div>
                <p className="text-gray-500 text-sm">Start Date</p>
                <p className="text-slate-900 text-sm">
                  {job?.about.start_date}
                </p>
              </div>
            </li>

            <li className="list flex items-center">
              <IconCircle icon={Clock} />
              <div>
                <p className="text-gray-500 text-sm">End Date</p>
                <p className="text-slate-900 text-sm">{job?.about.end_date}</p>
              </div>
            </li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="box border-b border-gray-300">
          <h4 className="title">Categories</h4>
          <div className="flex flex-wrap mt-2">
            {job?.about.categories.map((category) => (
              <span
                key={category}
                className="px-4 py-1 mr-2 mb-2 border border-orange-300 text-orange-300 rounded-full text-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* REQUIRED SKILLS */}
        <div className="box">
          <h4 className="title">Required Skills</h4>
          <div className="mt-2">
            {job?.about.required_skills.map((skill) => (
              <p key={skill} className="text-blue-800 text-sm my-1">
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsDashboard;
