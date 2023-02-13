import React from "react";
import ApiProgress from "../shared/ApiProgress";
import UserSignupPage from "../Pages/UserSignupPage";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import {HashRouter ,Route ,Redirect,Switch} from 'react-router-dom'
import TopBar from "../components/TopBar";

function App() {
  
  return (
    
    <div >
      <HashRouter>
      <TopBar/>
      <Switch>
        <Route exact path= "/" component={HomePage}/>
        <Route path= "/login" component={LoginPage}/>
        <Route path= "/signup" component={UserSignupPage}/>
        <Redirect to = '/'/>
      </Switch>
      
      </HashRouter>
    </div>
  );
}

export default App;

