// Home component. Imports home.scss. Classnames in imported scss files are locally scoped.
// This allows for strongly typed css classes that won't conflict with classnames of other components.
// See https://github.com/css-modules/css-modules

import * as React from 'react';
import {Grid, PageHeader} from 'react-bootstrap';
import {Row, Col} from 'react-flexbox-grid';
import CustomCarousel from './Carousel/Carousel';
import * as ReactMarkdown from 'react-markdown';
import Markdown from './Markdown';

const Home = () => {
    return (
        <div>
            <CustomCarousel/>
            <Grid>
                <PageHeader>Building affordable, quality homes since 1957</PageHeader>
                <Row>
                    <Col sm={6}>
                        <ReactMarkdown source={Markdown}/>
                    </Col>
                    <Col sm={6}>
                        <img src="/assets/16bw-1.jpg" width="100%" height="auto"/>
                    </Col>
                </Row>
            </Grid>
        </div>);
};

export default Home;
