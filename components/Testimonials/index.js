import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './testimonials.module.css'

const items = [
    <div className="item" data-value="1">1</div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="3">3</div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
];

const navItem = (item, i) => {
    return <i key={i} onClick={() => this.Carousel.slideTo(i)} />;
};

function Carousel() {
    return [
        <AliceCarousel
            mouseTracking
            disableButtonsControls
            items={items}
            ref={(el) => (Carousel = el)}
            infinite
            responsive={{
                0: {
                    items: 1
                }
            }}
        />,
        // <nav>{items.map(navItem)}</nav>,

        <button onClick={() => Carousel.slidePrev()}>Prev</button>,
        <button onClick={() => Carousel.slideNext()}>Next</button>
    ];
}

export default function Testimonials() {
    const carousel = Carousel()
    return (
        <div className={styles.container}>
        { carousel[1]}
        < div className = { styles.carousel } >

            { carousel[0]}

        </div >
        { carousel[2]}
        </div>
    )
}