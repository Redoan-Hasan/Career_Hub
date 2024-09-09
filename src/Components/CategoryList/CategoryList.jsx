import { useEffect, useState } from "react";
import PerList from "./perList";


const CategoryList = () => {
    const [cList ,setClist]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data =>setClist(data))
    },[])
    return (
        <div>
            <div className="max-w-screen-xl mx-auto my-32">
                <div>
                    <h1 className="text-center text-5xl font-extrabold text-[#1A1919]">Job Category List</h1>
                    <p className="text-center text-base font-medium leading-6 py-5 text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="grid grid-cols-4 gap-6 pt-8">
                    {
                        cList.map((list,idx)=> <PerList key={idx} list={list}></PerList> )
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryList;