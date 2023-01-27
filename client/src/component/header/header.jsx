import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitle'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src='/image/pic1.jpg' alt='' />
    </div>
  );
};

export default Header;
