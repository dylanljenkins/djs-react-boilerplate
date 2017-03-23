// Login component. The "view" portion of the flux pattern.
// The component renders differently depending on the loggingIn and loggedIn observables.
// The component calls the attemptLogIn action, updating the loggingIn and loggedIn observables.

import * as React from 'react';
import {Button, Input, InputGroup, InputGroupButton, Progress, Form} from 'reactstrap';
import {userStore} from '../../../stores/UserStore';
import {observer} from 'mobx-react';

const Login = observer(() => {
    if (userStore.loggingIn) {
        return (
            <Progress style={{width: '400px'}} animated color="primary" value="100" />
        );
    } else if (userStore.loggedIn) {
        return (
            <Button onClick={userStore.logOut}>Log out</Button>
        );
    } else {
        return (
            <Form inline>
                <InputGroup>
                    <Input placeholder="Username" onChange={userStore.updateUsernameField} />
                    <Input placeholder="Password" type="password" onChange={userStore.updatePassword} />
                    <InputGroupButton color="primary" onClick={userStore.attemptLogIn}>Log In</InputGroupButton>
                </InputGroup>
            </Form>
        );
    }
});

export default Login;
