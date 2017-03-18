import * as React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import {inject} from 'mobx-react';

@inject('uiStore')
const Header = () => {
    return (
        <Navbar color="faded" light toggleable>
            <NavbarBrand tag={Link} to="/">DJ</NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink tag={Link} to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/about">About</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;
