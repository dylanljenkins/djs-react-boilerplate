import * as React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';
import {userStore} from '../../stores/UserStore';

const Header = observer(() => {
    return (
        <Navbar color="faded" light toggleable>
            <NavbarBrand tag={Link} to="/">{userStore.username}</NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink tag={Link} to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/contact">Contact</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
});

export default Header;
