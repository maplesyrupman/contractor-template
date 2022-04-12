import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';

const slides = [
    { title: 'First item', description: 'Lorem ipsum' },
    { title: 'Second item', description: 'Lorem ipsum' }
];

export default function Testimonials() {
    return (
        <Slider classNames={horizontalCss} autoplay={5000}>
            {slides.map((slide, index) => <div key={index}>
                <h2>{slide.title}</h2>
                <div>{slide.description}</div>
            </div>)}
        </Slider>
    )
}