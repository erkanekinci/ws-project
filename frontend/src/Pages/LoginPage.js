import React, { Component } from 'react';
import Input from '../components/Input';
import { login } from '../api/ApiCalls';

class LoginPage extends Component {
    state = {
        tc : null,
        password: null,
        username: null
    }


    onChange = event => {
        const {name ,value} = event.target;
        this.setState({
            [name] : value
        });
    };


    onClickLogin = event => {
        event.preventDefault();
        const creds = {
            username :this.state.tc,
            password : this.state.password
            
        };
        login(creds);
    };


    render() {
        return (
            <div className='container'>
                <form>
                    <h1 className='text-center'>Giriş Yap</h1>
                    <Input label="Tc Kimlik Numarası" name = 'tc' onChange={this.onChange} />
                    <Input label="Şifre" name = 'password' type = "password" onChange = {this.onChange} />
                    <div className='text-center'>
                        <button className='btn btn-primary' onClick={this.onClickLogin}>Giriş Yap</button>
                    </div>
                    
                </form>
                
            </div>
        );
    }
}

export default LoginPage;