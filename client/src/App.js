import './styles/App.css'
import { React, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NewPetPage from './pages/NewPetPage'
import PetPage from './pages/PetPage'
import ProfilePage from './pages/ProfilePage'
import SearchResultsPage from './pages/SearchResultsPage'
import SignupPage from './pages/SignupPage'
import NavBar from './components/NavBar'
function App() {
  const [loggedIn, setLogIn] = useState(false)
  const [newPost, setNewPost] = useState({ name: '', owner: '', location: '', species: '', age: '', gender: '', adoption_fee: '', description: '', kid_friendly: '', pet_friendly: '', image: '' })
  const [petPosts, setPosts] = useState([])
  const [postComments, setComments] = useState([])

//// AUTHENTICATION

  const logOut = () => {
    setLogIn(false)
    localStorage.clear()
  }

  // const getToken = () => {
  //   let token = localStorage.getItem('token')
  //   if (token) {
  //     return setLogIn(true)
  //   }
  // }

//// AXIOS CALL(S)

  // const getPosts = async () => {
  //   try {
  //     const res = await axios.get(`${BASE_URL}/posts`)
  //     setPosts(res.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div className="App">
      <NavBar
        loggedIn={loggedIn}
        logOut={logOut}
      />
      <Switch>
        <Route 
          exact path="/" 
          component={(props) => <LoginPage {...props} 
          loggedIn={loggedIn}
          />} 
        />
        <Route
          path="/sign-up"
          component={(props) => <SignupPage {...props} 
          />}
        />
        <Route
          path="/home/:user_id"
          component={(props) => <HomePage {...props} 
          loggedIn={loggedIn}
          petPosts={petPosts}
          postComments={postComments}
          />}
        />
        <Route
          path="/user-profile/:user_id"
          component={(props) => <ProfilePage {...props} 
          loggedIn={loggedIn}
          petPosts={petPosts}
          postComments={postComments}
          />}
        />
        <Route
          path="/new-pet/:user_id"
          component={(props) => <NewPetPage {...props} 
          loggedIn={loggedIn}
          newPost={newPost}
          />}
        />
        <Route
          path="/pet-profile/:pet_id"
          component={(props) => <PetPage {...props} 
          loggedIn={loggedIn}
          postComments={postComments}
          />}
        />
        <Route
          path="/results"
          component={(props) => <SearchResultsPage {...props} 
          loggedIn={loggedIn}
          petPosts={petPosts}
          postComments={postComments}
          />}
        />
      </Switch>
    </div>
  )
}
export default App