import React, { useRef } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function ProjectImagesSlider({ data = [] }) {

    const ref = useRef(null);

    const _renderItem = ({ item, index }) => {
        return (
            <div key={index}>
                <img
                    style={{ width: "100%", maxHeight: "70vh", objectFit: "contain" }}
                    src={item}
                    alt="img_slide"
                />
                {/* <p className="legend">{`# ${index + 1}`}</p> */}
            </div>
        );
    }

    return (
        <Carousel
            ref={ref}
            autoPlay={true}
            swipeable={true}
            emulateTouch={true}
            infiniteLoop={true}
            interval={3000}
            transitionTime={500}
            width={"100%"}
            showThumbs={false}
            showStatus={false}
            showArrows={true}
        >
            {
                data && data.length > 0 && data.map((item, index) => _renderItem({ item, index }))
            }
        </Carousel>
    )
}
