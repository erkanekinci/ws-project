import React, { Component } from 'react';
import Input from '../components/Input';
import { login } from '../api/ApiCalls';
import axios from 'axios';
import { withApiProgress } from '../shared/ApiProgress';

class LoginPage extends Component {
    state = {
        tc : null,
        password: null,
        username: null,
        error: null
    }

    

    

    onChange = event => {
        const {name ,value} = event.target;
        this.setState({
            [name] : value,
            error: null
        });
    };


    onClickLogin = async event => {
        event.preventDefault();
        const creds = {
            username :this.state.tc,
            password : this.state.password
            
        };
        this.setState({
            error: null
        })
        try {
            await login(creds);
        } catch (apiError) {
            if(apiError.response.data.message === "Unauthorized"){
               this.setState({
                error: "Giriş Bilgileri Hatalı"
            }) 
            }
            
        }
        
    };


    render() {
        const {pendingApiCall} = this.props;

        const buttonEnabled = this.state.tc && this.state.password;
        return (
            <div className='container'>
                <form>
                    <h1 className='text-center'>Giriş Yap</h1>
                    <div className='mb-3'>
                    <Input  label="Tc Kimlik Numarası" name = 'tc' onChange={this.onChange} />
                    </div>
                    <div className='mb-3'>
                    <Input label="Şifre" name = 'password' type = "password" onChange = {this.onChange} />
                    </div>
                    {this.state.error && <div className='alert alert-danger' >{this.state.error}</div> }   
                    <div className='text-center ' >
                        <button className='btn btn-primary' onClick={this.onClickLogin} disabled = {!buttonEnabled || pendingApiCall}>
                            {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}
                            Giriş Yap</button>
                    </div>
                    
                </form>
                
            </div>
        );
    }
}
const LoginPageWithApiProgress = withApiProgress(LoginPage ,'/api/1.0/auth')
export default LoginPageWithApiProgress;