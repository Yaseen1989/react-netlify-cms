import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const content = [{
    title: 'Yaseen',
    description: 'hahahahaahha',
    image: "https://i.ytimg.com/vi/yw1eMPsZRB0/maxresdefault.jpg"
},
{
    title: 'Yaseen',
    description: 'hahahahaahha',
    image: "https://cdn.cgmagonline.com/wp-content/uploads/2015/07/pixelartheader.jpg"
}
]

const Carsoul = () => {
	return (
        <Slider>
        {content.map((item, index) => (
            <div
                key={index}
                style={{ background: `url('${item.image}') no-repeat center center` }}
            >
            </div>
        ))}
        </Slider>
    )
}

export default Carsoul;