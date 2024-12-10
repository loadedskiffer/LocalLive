# This is LocalLive

Its gonna be real cool someday

## Mission

- Create a website for communities to come together through music
- Allows performers, venues and audience members to connect
- Displays events to users that are occurring in the local area

## Stack

- MERN

## Install Instructions:

- clone repo
- make sure you have node installed on your machine
- cd into client and run `npm install`
- cd into server and run `npm install`
- go to https://www.mongodb.com/try/download/compass and scroll down to the GUI and install that
- ask me for mongo compass connection string and then plop that right in there and save it and you're in
- run `npm run start` in both server and client and the app should load up for ya

- super useful video to help you figure out whats going on https://www.youtube.com/watch?v=R4AhvYORZRY&ab_channel=TraversyMedia

## Running Server

- Open 2 terminals

  - CD into /server
    - run command "npm run start"
    - can end process by using command "ctrl c" and typing "y"
  - CD into /client
    - run command "npm run start"
    - can end process by using command "ctrl c" and typing "y"

- "Client" server can be found on http://localhost:3000/
  - This is where you can view the website
- "Server" server can be found on http://localhost:5000/

## Linking Pages Within the app

- Create 2 pages that you want to connect
- Create a button on one page with format:

<Link to="/artist-list">
        <button>View Artist List</button>
</Link>

- Open index.js file in /client/src

  - import the page that you want to connect to like:
    import ArtistList from './pages/Artist/ArtistList';

  - create the logic for the route in the file below like:
    <Route path='/artist-list' element={<ArtistList/>} />
