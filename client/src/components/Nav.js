import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

export default (props) => {
    return (
        <header>
            {props.authenticated && props.currentUser ? (
                <nav className='nav-wrapper sticky'>
                    <NavLink
                        to='/'
                        className='brand-logo right hide-on-small-and-down'>
                        <span className='sitename-font-nav'>di/</span>
                        sh
                        <span className='sitename-font-nav'>/are</span>
                    </NavLink>
                    <ul id='nav-mobile' className='left'>
                        <li>
                            <NavLink to='/recipes'> Recipes </NavLink>
                        </li>
                        <li>
                            <NavLink to='/profile'>Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to='/upload'>Post Recipe</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/'
                                onClick={() =>
                                    props.toggleAuthenticated(false, null, () =>
                                        props.history.push('/')
                                    )
                                }>
                                Sign Out
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            ) : (
                <nav className='nav-wrapper'>
                    <NavLink
                        to='/'
                        className='brand-logo right hide-on-small-and-down'>
                        <span className='sitename-font-nav'>di/</span>
                        <span className='sh-nav'>sh</span>
                        <span className='sitename-font-nav'>/are</span>
                    </NavLink>
                    <ul id='nav-mobile' className='left '>
                        <li>
                            <NavLink to='/recipes'>Recipes</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>Sign In</NavLink>
                        </li>
                        <li>
                            <NavLink to='/register'>Sign Up</NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};
