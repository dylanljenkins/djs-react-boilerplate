// Header component. This uses components from reactstrap, a collection of Bootstrap 4 components for React.

import * as React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';
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
