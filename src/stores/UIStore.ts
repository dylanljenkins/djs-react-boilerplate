import {observable, action, useStrict} from 'mobx';

useStrict(true);

export class UIStore {
    @observable public flag: boolean = false;

    @action
    private swapFlag = () => {
        this.flag = !this.flag;
    }
}