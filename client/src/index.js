import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import HomeScreen from './pages/HomeScreen';
import AristAuth from './pages/ArtistAuth';
import AudienceAuth from './pages/AudienceAuth';
import VenueAuth from './pages/VenueAuth';
import ProfileScreen from './pages/ProfileScreen';
import ArtistHome from './pages/Artist/ArtistHome';
import AudienceHome from './pages/Audience/AudienceHome';
import VenueHome from './pages/Venue/VenueHome';
import store from './store';
import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>} />
      <Route  path='/venueAuth' element={<VenueAuth/>} />
      <Route  path='/artistAuth' element={<AristAuth/>} />
      <Route  path='/audienceAuth' element={<AudienceAuth/>} />
      <Route path='/artist/artist-home' element={<ArtistHome/>}/>
      <Route path='/audience/audience-home' element={<AudienceHome/>}/>
      <Route path='/venue/venue-home' element={<VenueHome/>}/>
      <Route path='' element={<PrivateRoute/>}>
        <Route path='/profile' element={<ProfileScreen/>}/>
      </Route>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
