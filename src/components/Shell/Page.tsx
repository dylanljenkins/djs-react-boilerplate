import * as React from 'react';
import {Grid, PageHeader} from 'react-bootstrap';

export const Page = (props: {title: string, children?: any}) => {
    return (
        <Grid>
            <PageHeader>{props.title}</PageHeader>
            {props.children}
        </Grid>
    )
};
