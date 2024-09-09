import { PropTypes } from 'prop-types';
import './Perlist.css'
const PerList = ({list}) => {
    const {logo , category_name, availability} = list;
    return (
        <div>
            <div id='perlist' className='p-10 rounded-lg'>
                <div className='pb-8'>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h1 className='text-[#474747] text-xl font-extrabold'>{category_name}</h1>
                    <p className='pt-2 text-[#A3A3A3] text-base font-medium'>{availability}</p>
                </div>
            </div>
        </div>
    );
};

PerList.propTypes = {
    list: PropTypes.object
};
export default PerList;