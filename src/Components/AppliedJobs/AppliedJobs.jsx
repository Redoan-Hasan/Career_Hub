import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplies } from "../../Utility/LocalStorage";
import { RiArrowDropDownLine } from "react-icons/ri";
import AppliedJob from "./AppliedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs,setAppliedJobs]=useState([])
    const [displayJobs,setDisplayJobs]=useState([])
    const handleFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }
        else if(filter === 'onsite'){
            const onsite = appliedJobs.filter(onsite => onsite.remote_or_onsite === "Onsite")
            setDisplayJobs(onsite)
        }
        else if(filter === 'remote'){
            const remote = appliedJobs.filter(remote => remote.remote_or_onsite === "Remote")
            setDisplayJobs(remote)
        }
    }
    useEffect(() =>{
        const storedItemId = getStoredApplies();
        console.log('storedItemId' , storedItemId)
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job => storedItemId.includes(job.id))
            const jobsApplied = [];
            for(const id of storedItemId){
                const job = jobs.find(job => job.id === id)
                if(job){
                    jobsApplied.push(job)
                }
                console.log(storedItemId,jobsApplied)
            }
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
    },[jobs])
    
    return (
        <div>
            <div id="statistics" className="">
                <section id="JobDetails">
                    <div className="max-w-screen-xl mx-auto mb-6">
                        <h1 className="text-center text-4xl font-extrabold text-[#1A1919] py-32">Applied Jobs: {appliedJobs.length}</h1>
                    </div>
                </section>
            </div>
            <div className="max-w-screen-xl mx-auto text-right mt-32">
                <details className="dropdown">
                    <summary className="btn m-1 text-black font-semibold text-xl">Filter By<span><RiArrowDropDownLine></RiArrowDropDownLine></span></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleFilter('onsite')}><a>Onsite</a></li>
                        <li onClick={() => handleFilter('all')}><a>All</a></li>
                    </ul>
                </details>
            </div>
            <div className="max-w-screen-xl mx-auto  mt-8 mb-32">
                {
                    displayJobs.map(job=> <AppliedJob job={job} key={job.id}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;