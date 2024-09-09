import { Link } from "react-router-dom";


const AppliedJob = ({job}) => {
    return (
        <div className="p-7 mb-6 border-2 border-[#E8E8E8] rounded-lg flex justify-between items-center">
            <div className="flex gap-8 items-center">
            <div className="w-60 bg-[#F4F4F4] rounded-lg text-center flex justify-center">
                <img className="px-6 py-24 " src={job.logo} alt="" />
            </div>
            <div>
                <div>
                    <h1 className='text-[#474747] text-2xl font-extrabold'>{job.job_title}</h1>
                    <p className='text-[#757575] text-xl font-semibold py-3'>{job.company_name}</p>
                </div>
                <div className='flex gap-4 pb-4'>
                    <h1 className='border-2 border-[#7E90FE] py-2 px-4 rounded text-[#9873FF] font-extrabold text-base'>{job.remote_or_onsite}</h1>
                    <h1 className='border-2 border-[#7E90FE] py-2 px-4 rounded text-[#9873FF] font-extrabold text-base'>{job.job_type}</h1>
                </div>
                <div className='text-[#757575] flex gap-6 text-xl font-semibold'>
                    <div className='flex gap-2'>
                        <img src="assets/icons/location2.png" alt="" />
                        <p>{job.location}</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src="assets/icons/money.png" alt="" />
                        <p>{job.salary}</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='pt-6'>
                <Link to={`/jobDetails/${job.id}`}>
                <button className="py-[10px] px-4 rounded-lg text-white text-xl font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
                </Link>
                </div>
        </div>
    );
};

export default AppliedJob;