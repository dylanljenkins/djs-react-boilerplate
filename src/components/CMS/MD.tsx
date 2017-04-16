import * as React from 'react';
import {mdStore} from '../../stores/MDStore';
import {observer} from 'mobx-react';
import {Grid, PageHeader} from 'react-bootstrap';
import * as ReactMarkdown from 'react-markdown';
import {CustomSpinner} from '../Spinner/CustomSpinner';

// Renders markdown if the given title exists in the MDStore.
// If not, start loading the MD and display a loading spinner.
export const MDView = observer((props: {title: string}) => {
    if (mdStore.md.has(props.title)) {
        return (
            <ReactMarkdown source={mdStore.md.get(props.title)}/>
        );
    } else {
        mdStore.getMD(props.title);
        return (
            <CustomSpinner/>
        );
    }
});

export const MDPage = (props: {title: string}) => {
    return (
        <Grid>
            <PageHeader>{props.title}</PageHeader>
            <MDView title={props.title}/>
        </Grid>
    );
};
