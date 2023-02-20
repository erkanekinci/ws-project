import React from "react";
import ApiProgress from "../shared/ApiProgress";
import UserSignupPage from "../Pages/UserSignupPage";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import {HashRouter as Router ,Route ,Redirect,Switch} from 'react-router-dom'
import TopBar from "../components/TopBar";

class App extends React.Component {
  state = {
     isLoggedIn :  false,
};

 onLoginSuccess = () =>{
   this.setState({
    isLoggedIn : true
   })
 }

 onLogoutSuccess = () =>{
  this.setState({
    isLoggedIn : false
  })
 }
  
   render(){

    const{isLoggedIn} = this.state;
    return (
    
    <div >
      <Router>
      <TopBar isLoggedIn ={isLoggedIn} onLogoutSuccess = {this.onLogoutSuccess}  />
      <Switch>
        <Route exact path= "/" component={HomePage}/>
        {!isLoggedIn && <Route path= "/login" component={(props) => {
          return <LoginPage {...props} onLoginSuccess = {this.onLoginSuccess} />
        }}/>}
        <Route path= "/signup" component={UserSignupPage}/>
        <Redirect to = '/'/>
      </Switch>
      
      </Router>
    </div>
  );
  }
}  


export default App;

