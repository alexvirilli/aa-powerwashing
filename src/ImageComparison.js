import React from 'react';
import ReactCompareImage from 'react-compare-image';
import './ImageComparison.css'; 

function ImageComparison({ beforeImage, afterImage }) {
    return (
        <div className="image-comparison-slider-container">
            <ReactCompareImage
                sliderLineColor="black"
                sliderLineWidth={5}
                leftImage={beforeImage}
                rightImage={afterImage}
                sliderPositionPercentage={0.5}
            />
        </div>
    );
}

export default ImageComparison;

