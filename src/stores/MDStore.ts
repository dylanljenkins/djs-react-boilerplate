import {action, observable, useStrict} from 'mobx';
import Markdown from '../sampleData/Markdown';

class MDStore {

    @observable public md = observable.map<string>();

    @action public getMD = (title: string) => {
        // Fake a server call with a timeout.
        setTimeout(() => this.md.set(title, Markdown), 400);
    };
}

export const mdStore = new MDStore();
