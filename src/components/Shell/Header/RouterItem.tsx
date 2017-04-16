import * as React from 'react';
import { withRouter } from 'react-router-dom';
import {MenuItem, NavItem} from 'react-bootstrap';

// TODO set up active links.

class ComponentWithoutRouter extends React.Component<any, any> {

    public render() {
        return (
            <this.props.Component
                eventKey={this.props.eventKey}
                onSelect={this.props.onSelect}
                children={this.props.children}
                onClick={this.handleLink}
            />
        );
    }

    private handleLink = () => {
        this.props.history.push(this.props.to);
    }
}

const MenuItemWithoutRouter = (props) => {
    return (
        <ComponentWithoutRouter Component={MenuItem} {...props} />
    );
};

const NavItemWithoutRouter = (props) => {
    return (
        <ComponentWithoutRouter Component={NavItem} {...props} />
    );
};

export const RouterNavItem = withRouter(NavItemWithoutRouter);
export const RouterMenuItem = withRouter(MenuItemWithoutRouter);
