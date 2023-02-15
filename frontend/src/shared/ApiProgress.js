import React, { Component } from 'react';
import axios from 'axios';


export function withApiProgress(WrappedComponent , apiPath) {
    return class extends Component {
        static displayName = 'ApiProgress'
        state = {
            pendingApiCall: false
        };
    
        componentDidMount(){
            this.requestInterceptor = axios.interceptors.request.use(request =>{
                
                this.updateApiCall(request.url , true);
                return request;
            });
                
            this.responseInterceptor = axios.interceptors.response.use((response) =>{
                this.updateApiCall(response.config.url, false);
                return response;
            }, (error) =>{
                this.updateApiCall(error.config.url, false);
                throw error;
            } )
    
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }
    
        updateApiCall = (url, inProgress) => {
            if(url === apiPath){
                this.setState({ pendingApiCall: inProgress});
            }
        }
    
    
        render() {
            const {pendingApiCall} = this.state;
            return <WrappedComponent pendingApiCall = {pendingApiCall} {...this.props} />
        }
    }
}



