import * as React from 'react';
import {observer} from 'mobx-react';
import {userStore} from '../../stores/UserStore';

const Contact = (observer(() => {
    return (
        <div>
            {userStore.username}
            <button onClick={userStore.testAction}>Test Action</button>
        </div>
    );
}));

export default Contact;
