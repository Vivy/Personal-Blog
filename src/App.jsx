import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './component/pages/home/home';
import Login from './component/pages/login/login';
import Register from './component/pages/register/register';
import Settings from './component/pages/settings/settings';
import Single from './component/pages/single/single';
import Write from './component/pages/write/write';
import TopBar from './component/topbar/topbar';

const user = false;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' index element={<Home />} />
      <Route path='write' element={user ? <Write /> : <Register />} />
      <Route path='login' element={user ? <Home /> : <Login />} />
      <Route path='register' element={user ? <Home /> : <Register />} />
      <Route path='settings' element={user ? <Settings /> : <Register />} />
      <Route path='post/:id' element={<Single />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
