import './styles/App.css'
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
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={(props) => <LoginPage {...props} />} />
        <Route
          path="/sign-up"
          component={(props) => <SignupPage {...props} />}
        />
        <Route
          path="/home/:user_id"
          component={(props) => <HomePage {...props} />}
        />
        <Route
          path="/user-profile/:user_id"
          component={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/new-pet/:user_id"
          component={(props) => <NewPetPage {...props} />}
        />
        <Route
          path="/pet-profile/:pet_id"
          component={(props) => <PetPage {...props} />}
        />
        <Route
          path="/results"
          component={(props) => <SearchResultsPage {...props} />}
        />
      </Switch>
    </div>
  )
}
export default App
