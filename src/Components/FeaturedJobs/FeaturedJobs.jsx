import { useEffect, useState } from "react";
import Job from "./Job";


const FeaturedJobs = () => {
    const[jobs,setJobs]=useState([])
    const [dataLength,setDataLength] = useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                <div>
                    <h1 className='text-center text-5xl font-extrabold text-[#1A1919]'>Featured Jobs</h1>
                    <p className='text-center text-base font-medium leading-6 py-5 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="grid grid-cols-2 gap-6 py-6">
                    {
                        jobs.slice(0,dataLength).map((job,idx)=><Job key={idx} job={job}></Job>)
                    }
                </div>
                <div className={ dataLength === jobs.length ? "hidden" : "text-center" }>
                    <button onClick={()=>setDataLength(jobs.length)} className=" my-10 py-[10px] px-4 rounded-lg text-white text-xl font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;