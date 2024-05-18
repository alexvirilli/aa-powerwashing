import React from 'react';
import './ImageComparison.css'; 

function ImageComparison({ beforeImage, afterImage }) {
    return (
        <div className="image-comparison-container">
            <div className="image-container">
                <img src={beforeImage} alt="Before" className="comparison-image" />
                <p>Before</p>
            </div>
            <div className="image-container">
                <img src={afterImage} alt="After" className="comparison-image" />
                <p>After</p>
            </div>
        </div>
    );
}

export default ImageComparison;
