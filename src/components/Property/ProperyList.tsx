import * as React from 'react';
import IProperty from '../../types/IProperty';
import {Grid, Panel} from 'react-bootstrap';
import styles from './propertyList.scss';
import {propertyStore} from '../../stores/PropertyStore';
import {Page} from '../Shell/Page';

// Render a single property as a grid item
const PropertyGridItem = (props: {property: IProperty}) => {
    return (
        <Panel className={styles.panel}>This is a panel</Panel>
    )
};

export const PropertyGrid = () => {
    return (
        <Page title="Property Grid">
            <div className={styles.container}>
                {propertyStore.properties.map((property, index) => {
                    return <PropertyGridItem key={index} property={property}/>
                })}
            </div>
        </Page>
    )
};
