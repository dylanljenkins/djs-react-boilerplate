// MobX store.
// The observables are the "store" portion of the flux pattern.
// The actions are the "action" portion of the flux pattern.
//
// - https://facebook.github.io/flux/docs/in-depth-overview.html
// - https://mobx.js.org/

import {action, observable, useStrict} from 'mobx';

// Ensures that actions are the only functions that can update observables.
useStrict(true);

class UserStore {

    // Components listen to observables and automatically update when they change.
    @observable public loggedIn = false;
    @observable public loggingIn = false;

    private usernameField: string;
    private passwordField: string;

    @action public attemptLogIn = () => {

        // Set a "loading" flag so that the UI can display that it's currently loading.
        this.loggingIn = true;

        // Fake server call by waiting 2 seconds.
        new Promise((res) => setTimeout(res, 1000)).then(action(() => {

            // Log in if the username and password match.
            this.loggedIn = this.usernameField === 'admin' && this.passwordField === 'password';
            this.loggingIn = false;
        }));
    }

    @action public logOut = () => {
        this.loggedIn = false;
    }

    // usernameField and passwordField are updated as the user types.
    public updateUsernameField = (e) => {
        this.usernameField = e.target.value;
    }

    public updatePassword = (e) => {
        this.passwordField = e.target.value;
    }

}

export const userStore = new UserStore();
