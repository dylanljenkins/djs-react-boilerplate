import {observable, useStrict} from 'mobx';

useStrict(true);

class UIStore {

    @observable public flag: boolean = false;
}

export const uiStore = new UIStore();
