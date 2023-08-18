import React from 'react';

const ImageBanner = ({ imageUrl }) => {
    const bannerStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '300px',
        width: '100%'
    };

    return (
        <div style={bannerStyle}></div>
    );
}

export default ImageBanner;
