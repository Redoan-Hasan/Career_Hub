import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const{id,logo, job_title,company_name,remote_or_onsite,job_type,location,salary}=job;
    return (
        <div>
            <div className='p-10 border-[#E8E8E8] border-2 rounded-lg'>
                <div>
                    <img className='pb-8' src={logo} alt="" />
                </div>
                <div>
                    <h1 className='text-[#474747] text-2xl font-extrabold'>{job_title}</h1>
                    <p className='text-[#757575] text-xl font-semibold py-3'>{company_name}</p>
                </div>
                <div className='flex gap-4 pb-4'>
                    <h1 className='border-2 border-[#7E90FE] py-2 px-4 rounded text-[#9873FF] font-extrabold text-base'>{remote_or_onsite}</h1>
                    <h1 className='border-2 border-[#7E90FE] py-2 px-4 rounded text-[#9873FF] font-extrabold text-base'>{job_type}</h1>
                </div>
                <div className='text-[#757575] flex gap-6 text-xl font-semibold'>
                    <div className='flex gap-2'>
                        <img src="assets/icons/location2.png" alt="" />
                        <p>{location}</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src="assets/icons/money.png" alt="" />
                        <p>{salary}</p>
                    </div>
                </div>
                <div className='pt-6'>
                <Link to={`/jobDetails/${id}`}>
                <button className="py-[10px] px-4 rounded-lg text-white text-xl font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
};
export default Job;