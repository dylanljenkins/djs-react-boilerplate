import * as React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import * as styles from './customNavbar.scss';
import {Link} from 'react-router-dom';
import {RouterNavItem, RouterMenuItem} from './RouterItem';

const CustomNavbar = () => {
    return (
        <Navbar inverse className={styles.navbar}>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Zuccala Homes</Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavDropdown title="Home Designs" id="nav-designs">
                        <RouterMenuItem to="/about">Double Storey Collection</RouterMenuItem>
                        <RouterMenuItem to="/about">Single Storey Collection</RouterMenuItem>
                        <RouterMenuItem to="/about">Z Series Collection</RouterMenuItem>
                        <RouterMenuItem to="/about">Display Homes</RouterMenuItem>
                    </NavDropdown>
                    <RouterNavItem to="/about">House &amp; Land</RouterNavItem>
                    <NavDropdown title="Projects" id="nav-projects">
                        <RouterMenuItem to="/about">Knockdown &amp; Rebuild</RouterMenuItem>
                        <RouterMenuItem to="/about">Dual Occupancy</RouterMenuItem>
                        <RouterMenuItem to="/about">Medium Density</RouterMenuItem>
                        <RouterMenuItem to="/about">Design &amp; Construct</RouterMenuItem>
                        <RouterMenuItem to="/about">Custom</RouterMenuItem>
                    </NavDropdown>
                    <NavDropdown title="Promos" id="nav-promos">
                        <RouterMenuItem to="/about">A La Carte Promotion</RouterMenuItem>
                        <RouterMenuItem to="/about">Up to $10,000 Cash Back</RouterMenuItem>
                    </NavDropdown>
                    <NavDropdown title="About Us" id="nav-about">
                        <RouterMenuItem to="/about">Our Values</RouterMenuItem>
                        <RouterMenuItem to="/about">Our Heritage</RouterMenuItem>
                        <RouterMenuItem to="/about">Our Partners</RouterMenuItem>
                        <RouterMenuItem to="/about">Careers</RouterMenuItem>
                        <RouterMenuItem to="/about">News</RouterMenuItem>
                        <RouterMenuItem to="/about">Testimonials</RouterMenuItem>
                        <RouterMenuItem to="/about">Refer-a-Friend</RouterMenuItem>
                        <RouterMenuItem to="/about">Build Zones</RouterMenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
