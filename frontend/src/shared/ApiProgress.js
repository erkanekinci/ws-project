import React, { Component } from 'react';
import axios from 'axios';


export function withApiProgress(WrappedComponent , apiPath) {
    return class extends Component {
        static displayName = 'ApiProgress'
        state = {
            pendingApiCall: false
        };
    
        componentDidMount(){
            axios.interceptors.request.use(request =>{
                
                this.updateApiCall(request.url , true);
                return request;
            });
                
            axios.interceptors.response.use((response) =>{
                this.updateApiCall(response.config.url, false);
                return response;
            }, (error) =>{
                this.updateApiCall(error.config.url, false);
                throw error;
            } )
    
        }
    
        updateApiCall = (url, inProgress) => {
            if(url === apiPath){
                this.setState({ pendingApiCall: inProgress});
            }
        }
    
    
        render() {
            const {pendingApiCall} = this.state;
            return <WrappedComponent pendingApiCall = {pendingApiCall} />
        }
    }
}



