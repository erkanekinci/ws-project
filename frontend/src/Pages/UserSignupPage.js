import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import {signup} from '../api/ApiCalls';
import Input from "../components/Input";
class UserSignupPage extends React.Component{

    state = {
        Username: null,
        Tc :null,
        Password: null,
        PasswordRepeat: null,
        PendingApiCall: false,
        errors:{}

    };

    onChange = event =>{
        const { name , value } = event.target;
        const errors = {... this.state.errors}
        errors[name] = undefined
        this.setState({
            [name]: value,
            errors 
        });
    };


    onClikcSignUp = async event => {
        event.preventDefault();


        const body = {
            Username : this.state.Username,
            Tc : this.state.Tc,
            Password : this.state.Password
        };

        this.setState({ PendingApiCall : true});
   
        try{
           const response = await signup(body);
        }catch(error){
            
            this.setState({errors : error.response.data.validationErrors});
            
        }
        this.setState({PendingApiCall:false});
    };
        

    render(){
        const {PendingApiCall , errors} = this.state;
        const{Username , Tc} = errors;
        return(
            <div className="container">
                <form>
                    <h1 className="text-center">Kayıt OL</h1>
                    <Input name = "Username" label= "Kullanıcı adı" error = {Username} onChange = {this.onChange} />
                    <Input name = "Tc" label= "TC Kimlik Numarası" error = {Tc} onChange = {this.onChange} />
                    
                   
                    <div className="form-group">
                        <label>Şifre</label>
                        <input className="form-control" name = "Password" type = "password"  onChange={this.onChange}/> 
                    </div>
                    <div className="form-group">
                        <label>Şifre Tekrar</label>
                        <input className="form-control" name= "PasswordRepeat" type = "password" onChange={this.onChange} /> 
                    </div>
                    <div className="text-center">
                        <button 
                        className="btn btn-primary" 
                        onClick={this.onClikcSignUp}
                        disabled = {this.state.PendingApiCall}> 
                        {this.state.PendingApiCall && <span className="spinner-border spinner-border-sm"></span> } Kayıt ol
                        </button>
                    </div>
                
                </form>
            </div>
            
            
        );
    }
}


export default UserSignupPage;