import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import {signup} from '../api/ApiCalls';
import Input from "../components/Input";
import { withApiProgress } from "../shared/ApiProgress";
class UserSignupPage extends React.Component{

    state = {
        tc :null,
        adsoyad: null,
        Password: null,
        PasswordRepeat: null,
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
            adsoyad :this.state.adsoyad,
            tc : this.state.tc,
            Password : this.state.Password
        };

   
        try{
           const response = await signup(body);
        }catch(error){
            if(error.response.data.validationErrors){
                this.setState({errors : error.response.data.validationErrors});

            }
            
        }
    };
        

    render(){
        const {errors} = this.state;
        const{ tc,Password,PasswordRepeat} = errors;
        const {pendingApiCall} = this.props;
        return(
            <div className="container w-50 p-3">
                <form>
                    <h1 className="text-center">Kayıt OL</h1>
                    <div className="mb-3">
                    <Input name = "adsoyad" label= "Ad Soyad" error = {tc} onChange = {this.onChange} />
                    </div>
                    <div className="mb-3">
                    <Input name = "tc" label= "TC Kimlik Numarası" error = {tc} onChange = {this.onChange} />
                    </div>
                    <div className="mb-3">
                    <Input name = "Password" label= "Şifre" error = {Password} onChange = {this.onChange} type="password"/>
                    </div>
                    <div className="mb-3">
                    <Input name = "PasswordRepeat" label= "Şifre Tekrar" error = {PasswordRepeat} onChange = {this.onChange} type="password"/>
                    </div>
                    <div className="text-center">
                        <button 
                        className="btn btn-primary" 
                        onClick={this.onClikcSignUp}
                        disabled = {pendingApiCall || PasswordRepeat !== undefined}> 
                        {pendingApiCall && <span className="spinner-border spinner-border-sm"></span> } Kayıt ol
                        </button>
                    </div>
                
                </form>
            </div>
            
            
        );
    }
}

const UserSignupPageWithApiProgress = withApiProgress(UserSignupPage , '/api/1.0/users');

export default UserSignupPageWithApiProgress;