import {action, observable, useStrict} from 'mobx';

useStrict(true);

class UserStore {

    @observable public username: string = 'Dylan';

    @action public testAction = () => {
        console.log(this.username += 'f');
    }
}

export const userStore = new UserStore();
