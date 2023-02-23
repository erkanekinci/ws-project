import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class TopBar extends Component {

    render() {
        const{isLoggedIn , onLogoutSuccess } = this.props;

        let links = (
        <ul className='navbar-nav ml-auto p-2'>
        <li >
            <Link className='nav-link' to="/login">
            Giriş Yap
            </Link>
            
        </li>
        <li >
            <Link  className='nav-link ' to="/signup">
            Kayıt ol
            </Link>
            
        </li>

    </ul>
        );

        if (isLoggedIn){
            links =(
                <ul className='navbar-nav ml-auto p-2'>
                <li >
                <Link className='nav-link' onClick={onLogoutSuccess} to = "/">
                Çıkış Yap
                </Link>
                </li>
                </ul>

            )
        };
        return (
            <div className='shadow-sm bg-primary mb-3 p-1'>
                
                <nav className="navbar navbar-dark navbar-expand">
                <div className="container-fluid">
                    
                    <Link className="navbar-brand " to="/">Sigorta</Link>
                    {links}
                </div>
            </nav>
            </div>
            
        );
    }
}

export default TopBar;