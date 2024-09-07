import React from "react";
import Slider from "react-slick";

import { AppContext } from "../../../../Context";

import { VerifyLength } from "../../VerifyLengthWrapper";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { MainTextContainer } from "../MainTextContainer";
import { GraphContainer } from "../../GraphContainer";
import { WrapperContainer2 } from "../../WrapperContainers";
import { TextCard } from "../../TextComponents";

const HomeSlider = () => {
    const context = React.useContext(AppContext)

    const { graphs } = context.responseData?.graphsData || [];

    const settings = {
		infinite: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
        arrows: false,
        dots: true,
		style: { width: "100%", },
	};

    return(
        <VerifyLength array={graphs}>
            <Slider {...settings}>
                {graphs && graphs?.map((item, index) => (
                    <WrapperContainer2 padding={0} flexDirection="column" key={index} gap={0}>
                        <GraphContainer index={index} graph={item} title={true} wrapper={true}/>
                        
                        <MainTextContainer item={item}/>
                    </WrapperContainer2>
                ))}
            </Slider>
        </VerifyLength>
    );
}

export { HomeSlider }