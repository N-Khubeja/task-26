import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Contact from './pages/Contact';
import Users, { loader } from './pages/Users';
import User from './pages/User';
import Special from './pages/Special';
import Error from './pages/Error';
import Navigation from './components/Navigation';
import Formpage, { action } from './pages/Formpage';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        <Route path='/users' element={<Navigation/>}>
          <Route index element={<Users/>} loader={loader}/>
          <Route path='/users/:userid' element={<User/>}/>
          <Route path='/users/special' element={<Special/>}/>
        </Route>
        
        <Route path='/form' element={<Formpage/>} action={action}/>

        <Route path='*' element={<Error/>}/>
    </Route>
  )
)


function App() {
  return (
      <div>
        <RouterProvider router={routes}/>
      </div>
  );
}

export default App;
