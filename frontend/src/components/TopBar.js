import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/TopBarLogo.png';

class TopBar extends Component {
    render() {
        return (
            <div className='shadow-sm bg-primary mb-3'>
                
                <nav className="navbar navbar-dark navbar-expand">
                <div className="container-fluid">
                    
                    <Link className="navbar-brand " to="/">Sigorta</Link>
                    <ul className='navbar-nav ml-auto '>
                        <li >
                            <Link className='nav-link' to="/login">
                            Giriş Yap
                            </Link>
                            
                        </li>
                        <li >
                            <Link  className='nav-link' to="/signup">
                            Kayıt ol
                            </Link>
                            
                        </li>

                    </ul>
                </div>
            </nav>
            </div>
            
        );
    }
}

export default TopBar;