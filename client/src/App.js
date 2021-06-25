import './styles/App.css'
import { React, useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NewPetPage from './pages/NewPetPage'
import PetPage from './pages/PetPage'
import ProfilePage from './pages/ProfilePage'
import SearchResultsPage from './pages/SearchResultsPage'
import SignupPage from './pages/SignupPage'
import NavBar from './components/NavBar'
import NavMobile from './components/NavMobile'
import BrowsePage from './pages/BrowsePage'
import BrowseResultsPage from './pages/BrowseResultsPage'
import PetQuizPage from './pages/PetQuizPage'
import { useHistory } from 'react-router-dom'
// import axios from 'axios'
// import { BASE_URL } from './globals'

function App() {
  const [opened, setOpen] = useState(false)
  const [loggedIn, setLogIn] = useState(false)
  const [userID, setUserID] = useState('')
  const [userLocation, setUserLocation] = useState('')
  // const [specie, setSpecie] = useState([])
  const history = useHistory()
  const [keyword, setKeyword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)

  const handleSearch = async () => {
    /* double check that this is the correct axios call route */
    // const res = await axios.get(`${BASE_URL}/pets/${keyword}`)
    history.push(`/results/${keyword}`)
    setKeyword('')
  }

  // How do reset searchbar text to empty
  // after submitting search??

  const handleChangeSearch = (e) => {
    let content = e.target.value
    setKeyword(`${content}`)
  }

  //// AUTHENTICATION

  const logOut = () => {
    // setLogIn(false)
    setAuthenticated(false)
    localStorage.clear()
    // history.push('/')
  }

  const getToken = () => {
    let token = localStorage.getItem('token')
    if (token) {
      return setAuthenticated(true)
    }
  }

  //// FUNCTIONS

  const toggleMenu = () => {
    opened === true ? setOpen(() => false) : setOpen(() => true)
  }

  //// ON LOAD

  useEffect(() => {
    getToken()
  }, [])

  console.log(userID)

  return (
    <div className="App">
      <NavBar
        loggedIn={loggedIn}
        logOut={logOut}
        userID={userID}
        openMenu={toggleMenu}
        handleChange={handleChangeSearch}
        handleSearch={handleSearch}
        authenticated={authenticated}
      />
      <NavMobile
        logOut={logOut}
        userID={userID}
        opened={opened}
        closeMenu={toggleMenu}
        handleChange={handleChangeSearch}
        handleSearch={handleSearch}
        authenticated={authenticated}
      />
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => (
            <LoginPage
              {...props}
              setLogIn={setLogIn}
              history={history}
              setUserID={setUserID}
              authenticated={authenticated}
            />
          )}
        />
        <Route
          path="/sign-up"
          component={(props) => <SignupPage {...props} />}
        />
        <Route
          path="/home/:user_id"
          component={(props) => (
            <HomePage
              {...props}
              loggedIn={loggedIn}
              userID={userID}
              userLocation={userLocation}
              setUserID={setUserID}
              setUserLocation={setUserLocation}
              history={history}
              authenticated={authenticated}
            />
          )}
        />
        <Route
          path="/user-profile/:user_id"
          component={(props) => (
            <ProfilePage {...props} loggedIn={loggedIn} userID={userID} />
          )}
        />
        <Route
          path="/new-pet/:user_id"
          component={(props) => (
            <NewPetPage
              {...props}
              loggedIn={loggedIn}
              userID={userID}
              userLocation={userLocation}
            />
          )}
        />
        <Route
          path="/pet-profile/:pet_id"
          component={(props) => (
            <PetPage
              {...props}
              loggedIn={loggedIn}
              userID={userID}
              authenticated={authenticated}
            />
          )}
        />
        <Route
          path="/results"
          component={(props) => (
            <SearchResultsPage
              {...props}
              loggedIn={loggedIn}
              authenticated={authenticated}
            />
          )}
        />
        <Route
          path="/browse"
          component={(props) => <BrowsePage {...props} />}
        />
        <Route
          path="/browse-result/:specie"
          component={(props) => <BrowseResultsPage {...props} />}
        />
        <Route path="/quiz" component={(props) => <PetQuizPage {...props} />} />
      </Switch>
    </div>
  )
}
export default App
