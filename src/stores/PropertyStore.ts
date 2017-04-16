import {action, observable, useStrict} from 'mobx';
import Markdown from '../sampleData/Markdown';
import IProperty from '../types/IProperty';

class PropertyStore {

    @observable public properties: IProperty[] = require('../sampleData/properties.json').results;

}

export const propertyStore = new PropertyStore();
