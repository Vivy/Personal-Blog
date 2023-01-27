import { NavLink, Outlet } from 'react-router-dom';
import './topbar.css';

const TopBar = () => {
  const user = false;
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fa-brands fa-square-facebook'></i>
        <i className='topIcon fa-brands fa-square-twitter'></i>
        <i className='topIcon fa-brands fa-square-pinterest'></i>
        <i className='topIcon fa-brands fa-square-instagram'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <NavLink className='link' to='/'>
              HOME
            </NavLink>
          </li>
          <li className='topListItem'>
            <NavLink className='link' to='about'>
              ABOUT
            </NavLink>
          </li>
          <li className='topListItem'>
            <NavLink className='link' to='contact'>
              CONTACT
            </NavLink>
          </li>
          <li className='topListItem'>
            <NavLink className='link' to='write'>
              WRITE
            </NavLink>
          </li>
          <li className='topListItem'>
            <NavLink className='link' to='logout'>
              {user && 'LOGOUT'}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <img className='topImage' src='/image/profileAI.jpg' alt='profile' />
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <NavLink className='link' to='login'>
                LOGIN
              </NavLink>
            </li>
            <li className='topListItem'>
              <NavLink className='link' to='register'>
                REGISTER
              </NavLink>
            </li>
          </ul>
        )}
        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default TopBar;
