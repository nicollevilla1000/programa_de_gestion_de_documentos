import React from "react";
import Slider from "react-slick";

import { AppContext } from "../../../Context";
import { VerifyLength } from "../VerifyLengthWrapper";
import { InstructionCard } from "./InstructionCard";

const SliderInstructionsContainer = ({array}) => {
    const context = React.useContext(AppContext)

    const data = array || [];

    const width = context.windowWidth <= 1050 ? "100%" : "50%";
    
    const settings = {
		infinite: true,
        speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
        pauseOnHover: true,
		autoplay: true,
		autoplaySpeed: 5000,
        arrows: false,
        dots: true,
		style: { width: width },
	};

    return(
        <VerifyLength array={data}>
            <Slider {...settings} >
                {data?.map((item, index) => (
                    <InstructionCard key={index} item={item} index={index}/>
                ))}
            </Slider>
        </VerifyLength>
    );
}

export { SliderInstructionsContainer }