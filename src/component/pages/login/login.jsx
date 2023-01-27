import { NavLink } from 'react-router-dom';
import TopBar from '../../topbar/topbar';
import './login.css';

const Login = () => {
  return (
    <>
      {/* <TopBar /> */}
      <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className='loginForm'>
          <label>Email</label>
          <input
            type='email'
            className='loginInput'
            placeholder='Enter your email..'
          />
          <label>Password</label>
          <input
            type='password'
            className='loginInput'
            placeholder='Enter your password..'
          />
          <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegisterButton'>
          <NavLink className='link' to='register'>
            Register
          </NavLink>
        </button>
      </div>
    </>
  );
};

export default Login;
