import SideBar from '../../sidebar/sidebar';
import SinglePost from '../../singlepost/singlepost';
import './single.css';

const Single = () => {
  return (
    <div className='single'>
      <SinglePost />
      <SideBar />
    </div>
  );
};

export default Single;
