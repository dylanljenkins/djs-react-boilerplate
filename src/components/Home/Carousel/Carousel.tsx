import * as React from 'react';
import {Carousel} from 'react-bootstrap';
import * as styles from './carousel.scss';

const CustomCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div className={styles.image1}/>
                <Carousel.Caption>
                    <h3>Your Custom Builder at a "Volume Builder Price"</h3>
                    <p>...Since 1957</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className={styles.image2}/>
                <Carousel.Caption>
                    <h3>New Display Homes Coming Soon</h3>
                    <p>To Kalkallo, Point Cook and Wollert</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className={styles.image3}/>
                <Carousel.Caption>
                    <h3>Take a look at our "A La Carte" Promotion</h3>
                    <p>Your Home, Your Choice</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CustomCarousel;
