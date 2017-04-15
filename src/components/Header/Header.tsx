// Header component. This uses components from reactstrap, a collection of Bootstrap 4 components for React.

import {observer} from 'mobx-react';
import * as React from 'react';
import CustomNavbar from './CustomNavbar/CustomNavbar';
import Top from './Top/Top';
// import {LinkContainer} from 'react-router-bootstrap';

// Need to use this for MenuItemWithoutRouter links.
// https://github.com/react-bootstrap/react-router-bootstrap/issues/186

const Header = observer(() => {
    return (
        <div>
            {/*<Top/>*/}
            <CustomNavbar/>
        </div>
    );
});

export default Header;
