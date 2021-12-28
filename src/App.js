import './App.css';
import Home from "./component/Home/Home";
import Dashboard from "./component/Dashboard/DashBoard"; 
import Campaigns from "./component/Campaigns/Campaigns";
import Donation from "./component/Donation/Donation";
import AboutUs from "./component/AboutUs/AboutUs";
import Contact from "./component/Contact/Contact";
import Login from "./component/Login/Login";
import NavBar from './component/NavBar/NavBar';
import { createContext } from 'react';
import { useState } from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SingleCampaign from './component/SingleCampaign/SingleCampaign';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [buyService, setbuyService] = useState({});
  return (

    <UserContext.Provider value = {{value :[loggedInUser, setLoggedInUser], value2 :[buyService, setbuyService]}}>
    <Router>
      <NavBar></NavBar>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route exact path="/campaigns">
            <Campaigns></Campaigns>
          </Route>
          <Route exact path="/campaigns/:key">
            <SingleCampaign></SingleCampaign>
          </Route>
          <Route exact path="/donation">
            <Donation></Donation>
          </Route>
          <Route exact path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          {/* <Route exact path="/login">
            <Login></Login>
          </Route> */}
      </Switch>
    </Router>
  </UserContext.Provider>

  );
}

export default App;
