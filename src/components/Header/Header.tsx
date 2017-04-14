// Header component. This uses components from reactstrap, a collection of Bootstrap 4 components for React.

import {observer} from 'mobx-react';
import * as React from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import * as styles from './header.scss';
// import {Link} from 'react-router-dom';

const Header = observer(() => {
    return (
        <Navbar fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#" id={styles.brand}>Zuccala Homes</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavDropdown title="Home Designs" id="nav-designs">
                    <MenuItem href="#">Double Storey Collection</MenuItem>
                    <MenuItem href="#">Single Storey Collection</MenuItem>
                    <MenuItem href="#">Z Series Collection</MenuItem>
                </NavDropdown>
                <NavItem href="#">House &amp; Land</NavItem>
                <NavDropdown title="Projects" id="nav-projects">
                    <MenuItem href="#">Knockdown &amp; Rebuild</MenuItem>
                    <MenuItem href="#">Dual Occupancy</MenuItem>
                    <MenuItem href="#">Medium Density</MenuItem>
                    <MenuItem href="#">Design &amp; Construct</MenuItem>
                    <MenuItem href="#">Custom</MenuItem>
                </NavDropdown>
                <NavDropdown title="Current Promotions" id="nav-promos">
                    <MenuItem href="#">A La Carte Promotion</MenuItem>
                    <MenuItem href="#">Up to $10,000 Cash Back</MenuItem>
                </NavDropdown>
                <NavItem href="#">Display Homes</NavItem>
                <NavDropdown title="About Us" id="nav-about">
                    <MenuItem href="#">Our Values</MenuItem>
                    <MenuItem href="#">Our Heritage</MenuItem>
                    <MenuItem href="#">Our Partners</MenuItem>
                    <MenuItem href="#">Careers</MenuItem>
                    <MenuItem href="#">News</MenuItem>
                    <MenuItem href="#">Testimonials</MenuItem>
                    <MenuItem href="#">Refer-a-Friend</MenuItem>
                    <MenuItem href="#">Build Zones</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
});

export default Header;
