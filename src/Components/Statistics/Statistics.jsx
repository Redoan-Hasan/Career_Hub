import CategoryList from '../CategoryList/CategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import './Statistics.css'

const Statistics = () => {
    return (
        <div >
            <section id='statistics'>
            <div className="flex justify-between items-center max-w-screen-xl mx-auto  ">
                <div className="w-[45%]">
                    <div>
                        <h1 className=" text-[60px] font-extrabold leading-[70px] text-[#1A1919]">One Step <br /> Closer To Your <br /> <span id="dream">Dream Job</span></h1>
                    </div>
                    <div>
                        <p className='text-lg leading-[20px] font-medium text-[#757575] py-6 w-[90%]'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    </div>
                    <div>
                        <button className="py-[12px] px-5 rounded-lg text-white text-xl font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button>
                    </div>
                </div>
                <div id='img' className="w-[55%] left-[85px] relative">
                    <img className='' src="assets/images/user.png" alt="" />
                </div>
            </div>
            </section>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Statistics;