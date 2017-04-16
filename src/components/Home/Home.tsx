// Home component. Imports home.scss. Classnames in imported scss files are locally scoped.
// This allows for strongly typed css classes that won't conflict with classnames of other components.
// See https://github.com/css-modules/css-modules

import * as React from 'react';
import {Grid, PageHeader} from 'react-bootstrap';
import {Row, Col} from 'react-flexbox-grid';
import CustomCarousel from './Carousel/Carousel';
import {mdStore} from '../../stores/MDStore';
import {MDView} from '../CMS/MD';

class Home extends React.Component<any, any> {

    private pageTitle = 'Home';

    public componentWillMount() {
        mdStore.getMD(this.pageTitle);
    }

    public render() {
        return (
            <div>
                <CustomCarousel/>
                <Grid>
                    <PageHeader>Building affordable, quality homes since 1957</PageHeader>
                    <Row>
                        <Col sm={6}>
                            <MDView title={this.pageTitle}/>
                        </Col>
                        <Col sm={6}>
                            <img src="/assets/16bw-1.jpg" width="100%" height="auto"/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Home;
