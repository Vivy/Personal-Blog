import './sidebar.css';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src='/image/Ai1.jpg'
          alt='Ai1'
          style={{ width: 200, height: 200 }}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          perferendis laudantium tenetur corporis excepturi aspernatur quos
          praesentium fuga esse numquam, suscipit quas, dolore sapiente maiores
          reprehenderit soluta. Fuga, voluptas dicta!
        </p>
        <div className='sidebarItem'>
          <span className='sidebarTitle'>CATEGORIES</span>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>Life</li>
            <li className='sidebarListItem'>Music</li>
            <li className='sidebarListItem'>Style</li>
            <li className='sidebarListItem'>Sport</li>
            <li className='sidebarListItem'>Cinema</li>
            <li className='sidebarListItem'>Tech</li>
          </ul>
        </div>
        <div className='sidebarItem'>
          <span className='sidebarTitle'>FOLLOW US</span>
          <div className='sidebarSocial'>
            <i className='sidebarIcon fa-brands fa-square-facebook'></i>
            <i className='sidebarIcon fa-brands fa-square-twitter'></i>
            <i className='sidebarIcon fa-brands fa-square-pinterest'></i>
            <i className='sidebarIcon fa-brands fa-square-instagram'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
