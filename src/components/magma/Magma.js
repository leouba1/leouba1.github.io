import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Magma.css';

function Magma() {
    const imageNames = ['speculum_1.png', 'speculum_2.png', 'speculum_3.png', 'speculum_4.png', 'speculum_5.png', 'speculum_6.png', 'speculum_7.png', 'speculum_8.png', 'speculum_9.png', 'speculum_10.png', 'speculum_11.png', 'speculum_12.png', 'speculum_13.png', 'speculum_14.png', 'speculum_15.png'];
    const images = imageNames.map(name => ({
        src: `${process.env.PUBLIC_URL}/images/magma/${name}`,
        alt: name
    }));

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={3}
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            mousewheel={true}
            modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="image-container">
                        <div className="image-index">{index + 1}</div>
                        <img src={image.src} alt={image.alt} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Magma;
