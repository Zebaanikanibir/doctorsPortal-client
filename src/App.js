import React, { createContext, useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home"
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor/AddDoctor';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin/Admin';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="App">
      {/* <h1>{loggedInUser.email}</h1> */}
      <Router>
        <Switch>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/appointment">
            <Appointment />
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
          <Route  path="/dashboard">
           <Dashboard></Dashboard>
          </Route>
          <Route  path="/patients">
           <AllPatients></AllPatients>
          </Route>
          <PrivateRoute  path="/addDoctor">
           <AddDoctor></AddDoctor>
          </PrivateRoute>
          <Route  path="/admin">
           <Admin></Admin>
          </Route>
        </Switch>
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;
