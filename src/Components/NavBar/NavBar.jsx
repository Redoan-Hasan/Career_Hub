import { NavLink } from "react-router-dom";
import './NavBar.css'


const NavBar = () => {
    return (
        <div id='statistics'>
            <section id="nav" >
                <nav className="max-w-screen-xl mx-auto flex justify-between items-center py-16 h-full ">
                    <div className="text-3xl font-extrabold">
                        CareerHub
                    </div>
                    <div id="navLink" className="flex gap-10 text-base font-medium text-[#757575] ">
                        <NavLink to="/statistics">Statistics</NavLink>
                        <NavLink to="/jobs">Applied Jobs</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                    </div>
                    <div>
                        <button className="py-[18px] px-6 rounded-lg text-white text-xl font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Start Applying</button>
                    </div>
                </nav>
                <section>

                </section>
            </section>
        </div>
    );
};

export default NavBar;