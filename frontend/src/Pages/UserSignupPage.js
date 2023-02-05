import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import {signup} from '../api/ApiCalls';
import Input from "../components/Input";
class UserSignupPage extends React.Component{

    state = {
        tc :null,
        Password: null,
        PasswordRepeat: null,
        PendingApiCall: false,
        errors:{}

    };

    onChange = event =>{
        const { name , value } = event.target;
        const errors = {...this.state.errors}
        errors[name] = undefined
        if(name === 'Password' || name === "PasswordRepeat"){
            if(name === 'Password' && value !== this.state.PasswordRepeat){
                errors.PasswordRepeat ="Şifreler uyuşmuyor";
            }else if (name === "PasswordRepeat" && value !== this.state.Password){
                errors.PasswordRepeat ="Şifreler uyuşmuyor";
            }else{
                errors.PasswordRepeat = undefined;
            }
        }
        this.setState({
            [name]: value,
            errors 
        });
    };


    onClikcSignUp = async event => {
        event.preventDefault();


        const body = {
            tc : this.state.tc,
            Password : this.state.Password
        };

        this.setState({ PendingApiCall : true});
   
        try{
           const response = await signup(body);
        }catch(error){
            if(error.response.data.validationErrors){
                this.setState({errors : error.response.data.validationErrors});

            }
            
        }
        this.setState({PendingApiCall:false});
    };
        

    render(){
        const {PendingApiCall , errors} = this.state;
        const{ tc,Password,PasswordRepeat} = errors;
        return(
            <div className="container">
                <form>
                    <h1 className="text-center">Kayıt OL</h1>
                    <Input name = "tc" label= "TC Kimlik Numarası" error = {tc} onChange = {this.onChange} />
                    <Input name = "Password" label= "Şifre" error = {Password} onChange = {this.onChange} type="password"/>
                    <Input name = "PasswordRepeat" label= "Şifre Tekrar" error = {PasswordRepeat} onChange = {this.onChange} type="password"/>
                    <div className="text-center">
                        <button 
                        className="btn btn-primary" 
                        onClick={this.onClikcSignUp}
                        disabled = {PendingApiCall || PasswordRepeat !== undefined}> 
                        {PendingApiCall && <span className="spinner-border spinner-border-sm"></span> } Kayıt ol
                        </button>
                    </div>
                
                </form>
            </div>
            
            
        );
    }
}


export default UserSignupPage;