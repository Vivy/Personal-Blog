import { Outlet } from 'react-router-dom';
import Header from '../../header/header';
import Posts from '../../posts/posts';
import SideBar from '../../sidebar/sidebar';
import TopBar from '../../topbar/topbar';
import './home.css';

const Home = () => {
  return (
    <>
      <TopBar />
      <Header />
      <div className='home'>
        <Posts />
        <SideBar />
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default Home;
