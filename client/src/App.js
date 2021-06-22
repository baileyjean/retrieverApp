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
import BrowsePage from './pages/BrowsePage'
import BrowseResultsPage from './pages/BrowseResultsPage'
// import axios from 'axios'
// import { BASE_URL } from './globals'

function App() {
  const [loggedIn, setLogIn] = useState(true)

  // const [specie, setSpecie] = useState([])

  //// AUTHENTICATION

  const logOut = () => {
    setLogIn(false)
    localStorage.clear()
  }

  const getToken = () => {
    // let token = localStorage.getItem('token')
    // if (token) {
    //   return setLogIn(true)
    // }
  }

  //// AXIOS CALL(S)
  //// ON LOAD

  useEffect(() => {
    getToken()
  }, [])

  return (
    <div className="App">
      <NavBar loggedIn={loggedIn} logOut={logOut} />
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <LoginPage {...props} loggedIn={loggedIn} />}
        />
        <Route
          path="/sign-up"
          component={(props) => <SignupPage {...props} />}
        />
        <Route
          path="/home/:user_id"
          component={(props) => <HomePage {...props} loggedIn={loggedIn} />}
        />
        <Route
          path="/user-profile/:user_id"
          component={(props) => <ProfilePage {...props} loggedIn={loggedIn} />}
        />
        <Route
          path="/new-pet/:user_id"
          component={(props) => <NewPetPage {...props} loggedIn={loggedIn} />}
        />
        <Route
          path="/pet-profile/:pet_id"
          component={(props) => <PetPage {...props} loggedIn={loggedIn} />}
          component={(props) => <HomePage {...props} loggedIn={loggedIn} />}
        />
        <Route
          path="/user-profile/:user_id"
          component={(props) => <ProfilePage {...props} loggedIn={loggedIn} />}
        />
        <Route
          path="/new-pet/:user_id"
          component={(props) => <NewPetPage {...props} loggedIn={loggedIn} />}
        />
        <Route
          path="/pet-profile/:pet_id"
          component={(props) => <PetPage {...props} loggedIn={loggedIn} />}
        />
        <Route
          path="/results"
          component={(props) => (
            <SearchResultsPage {...props} loggedIn={loggedIn} />
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
      </Switch>
    </div>
  )
}
export default App
