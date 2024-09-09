
const Footer = () => {
    return (
        <div>
            <footer className="bg-[#1A1919] text-neutral-content p-10">
                <div className="container max-w-screen-xl mx-auto">
                    <div className="flex  gap-20">
                        <div className="w-full md:w-1/5 mb-6 md:mb-0">
                            <h4 className="text-3xl font-extrabold text-white mb-4">CareerHub</h4>
                            <p className="mb-4 text-[#FFFFFFB2] text-base font-normal leading-[27px]">
                            There are many variations of passages of Lorem Ipsum, but the
                            majority have suffered alteration in some form.
                            </p>
                                <div className="flex items-center space-x-4">
                                <a href="#" className="text-[#337FFF] bg-white w-[25px]  rounded-full text-center ">
                                    <i className=" fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-[#33CCFF] bg-white w-[25px] rounded-full text-center">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-[#337FFF] bg-white w-[25px]  rounded-full text-center">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                </div>
                            </div>
                        <div className="w-full md:w-1/5 mb-6 md:mb-0">
                            <h4 className="text-xl font-semibold text-white mb-4">Company</h4>
                            <ul className="space-y-2 text-base text-[#FFFFFFB2] leading-[40px]">
                                <li><a href="#" className="hover:underline">About Us</a></li>
                                <li><a href="#" className="hover:underline">Work</a></li>
                                <li><a href="#" className="hover:underline">Latest News</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/5 mb-6 md:mb-0">
                            <h4 className="text-xl font-semibold text-white mb-4">Product</h4>
                            <ul className="space-y-2 text-base text-[#FFFFFFB2] leading-[40px]">
                                <li><a href="#" className="hover:underline">Prototype</a></li>
                                <li><a href="#" className="hover:underline">Plans & Pricing</a></li>
                                <li><a href="#" className="hover:underline">Customers</a></li>
                                <li><a href="#" className="hover:underline">Integrations</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/5 mb-6 md:mb-0">
                            <h4 className="text-xl font-semibold text-white mb-4">Support</h4>
                            <ul className="space-y-2 text-base text-[#FFFFFFB2] leading-[40px]">
                                <li><a href="#" className="hover:underline">Help Desk</a></li>
                                <li><a href="#" className="hover:underline">Sales</a></li>
                                <li><a href="#" className="hover:underline">Become a Partner</a></li>
                                <li><a href="#" className="hover:underline">Developers</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/5 mb-6 md:mb-0">
                            <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
                            <ul className="space-y-2 text-base text-[#FFFFFFB2] leading-[40px]">
                            <li>526 Broadway, NYC</li>
                            <li>+1777 - 978 - 9450</li>
                            </ul>
                        </div>
                    </div>
                        <div className="text-[#FFFFFF66] text-sm leading-[23px] flex justify-between border-t border-neutral-content mt-10 pt-5">
                            <p>©2023 <span className="font-bold">CareerHub</span>. All Rights Reserved</p>
                            <p>Powered by <span className="font-bold">CareerHub</span></p>
                        </div>
                </div>
            </footer>
        </div>
        );
    };

export default Footer;
