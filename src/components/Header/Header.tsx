// Header component. This uses components from reactstrap, a collection of Bootstrap 4 components for React.

import {observer} from 'mobx-react';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import Login from './Login/Login';

const Header = observer(() => {
    return (
        <Navbar color="faded" light toggleable>
            <NavbarBrand tag={Link} to="/">DJ's React Boilerplate</NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink tag={Link} to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/contact">Contact</NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto">
                <NavItem>
                    <Login/>
                </NavItem>
            </Nav>
        </Navbar>
    );
});

export default Header;
