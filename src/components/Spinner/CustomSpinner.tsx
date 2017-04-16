import * as React from 'react';
import * as Spinner from 'react-spinkit';
import styles from './customSpinner.scss';
import {Col, Row} from 'react-flexbox-grid';

// A centered loading spinner.
export const CustomSpinner = () => {
    return (
        <Row middle="xs" center="xs"><Col>
            <Spinner className={styles.spinner} spinnerName="wandering-cubes" noFadeIn/>
        </Col></Row>
    );
};
