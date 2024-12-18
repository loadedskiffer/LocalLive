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
import CreateEvent from './pages/Venue/CreateEvent';
import store from './store';
import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux';
import ArtistList from './pages/Artist/ArtistList';
import SavedEvents from './pages/Audience/AudienceSavedEvents';
import EditEvent from './pages/Venue/EditEvent';
import ArtistCreateEvent from './pages/Artist/ArtistCreateEvent';
import AudienceVenueList from './pages/Audience/AudienceVenueList';
import AudienceArtistList from './pages/Audience/AudienceArtistList';
import VenueArtistList from './pages/Venue/VenueArtistList';
import ArtistEvents from './pages/Artist/ArtistEvent';

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
      <Route path='/venue/create-event' element={<CreateEvent/>}/>
      <Route path='/artist/create-event' element={<ArtistCreateEvent/>}/>
      <Route path='/artist-list' element={<ArtistList/>} />
      <Route path='/saved-events' element = {<SavedEvents/>}/>
      <Route path='/edit-event' element = {<EditEvent/>}/>
      <Route path ='/venue-list' element = {<AudienceVenueList/>}/>
      <Route path ='/artist-list' element = {<AudienceArtistList/>}/>
      <Route path ='/artist-list' element = {<VenueArtistList/>}/>
      <Route path ='/artist-list' element = {<ArtistEvents/>}/>
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
