import { Link, useLoaderData, useParams } from "react-router-dom";
import './JobDetails.css'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveApplies } from "../../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id}= useParams();
    const idInt = parseInt(id);
    // const currentJob = jobs?.find(currentJob => currentJob.id === idInt);
    const currentJob = Array.isArray(jobs) ? jobs.find((current) => current.id === idInt) : null;
    console.log(Array.isArray(jobs))
    console.log(jobs)
    if (!currentJob) {
        return (
            <div className="max-w-screen-xl mx-auto my-32">
                <h1 className="text-4xl text-center font-bold">Job not found</h1>
                <p className="text-center">Sorry, we couldn't find the job you're looking for.</p>
            </div>
        );
    }
    // console.log(jobs,id, currentJob)
    // console.log(Array.isArray(jobs))
    const handleApplyNow = () =>{
    saveApplies(idInt);

    // toast('You have applied successfully')
    toast.success(
        <div className="text-center">
        Congratulation, <br /> You have applied successfully!
        </div>
        , {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
}
    return (
        <div>
            <div id="statistics" className="">
                <section id="JobDetails">
                    <div className="max-w-screen-xl mx-auto mb-6">
                        <h1 className="text-center text-4xl font-extrabold text-[#1A1919] py-32">Job Details</h1>
                    </div>
                </section>
            </div>
            <div className="flex gap-6 max-w-screen-xl mx-auto my-32">
                    <div className="w-2/3 ">
                        <h1 className="text-[#1A1919] text-base leading-8 font-extrabold">Job Description: <span className="font-medium text-[#757575]">{currentJob.job_description}</span></h1>
                        <h1 className="text-[#1A1919] text-base leading-8 font-extrabold py-6">Job Responsibility: <span className="font-medium text-[#757575]">{currentJob.job_responsibility}</span></h1>
                        <h1 className="text-[#1A1919] text-base leading-8 font-extrabold">Education Requirements: <br />
                            <span className="font-medium text-[#757575]">{currentJob.educational_requirements}</span>
                        </h1>
                        <h1 className="text-[#1A1919] text-base leading-8 font-extrabold py-6">Experiences: <br />
                            <span className="font-medium text-[#757575]">{currentJob.experiences}</span>
                        </h1>
                    </div>
                    <div  className="w-1/3 ">
                        <div id="perJob" className="p-7">
                            <h1 className="text-xl font-extrabold">Job Details</h1>
                            <div className="border-[1px] border-[#7e90fe] my-6"></div>
                            <div className="">
                                <h1 className="text-xl font-bold text-[#474747]">Salary : <span className="font-medium text-[#757575]">{currentJob.salary} (Per Month)</span></h1>
                                <h1 className="text-xl font-bold text-[#474747] pt-4">Job Title : <span className="font-medium text-[#757575]">{currentJob.job_title}</span></h1>
                            </div>
                            <h1 className="text-xl font-extrabold pt-8">Contact Information</h1>
                            <div className="border-[1px] border-[#7e90fe] my-6"></div>
                            <div className="">
                                <h1 className="text-xl font-bold text-[#474747]">Phone : <span className="font-medium text-[#757575]">{currentJob.contact_information.phone}</span></h1>
                                <h1 className="text-xl font-bold text-[#474747] pt-4">Email : <span className="font-medium text-[#757575]">{currentJob.contact_information.email}</span></h1>
                                <h1 className="text-xl font-bold text-[#474747] pt-4">Address : <span className="font-medium text-[#757575]">{currentJob.contact_information.address}</span></h1>
                            </div>
                        </div>
                        <div>
                            <Link>
                                <button onClick={handleApplyNow} className="mt-6 py-[18px] w-full rounded-lg text-white text-xl font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Apply Now</button>
                            </Link>
                        </div>
                    </div>
            </div>
            <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition = {Bounce}
            />
        </div>
    );
};

export default JobDetails;