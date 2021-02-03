import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default (props) => (
    <div>
        <Nav
            {...props}
            authenticated={props.authenticated}
            currentUser={props.currentUser}
            className='header-elevated'
            toggleAuthenticated={props.toggleAuthenticated}
        />
        {props.children}

        <Footer />
    </div>
);
