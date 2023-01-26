import Header from '../../header/header';
import Posts from '../../posts/posts';
import SideBar from '../../sidebar/sidebar';
import './home.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className='home'>
        <Posts />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
