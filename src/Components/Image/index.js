import React from 'react';
import PropTypes from 'prop-types';

function Image( props ) {

    let {
        src,
        alt,
        title,
        width,
        height,
        ...otherProps
    } = props;

    title = title || alt;

    return (
        <img
            src={ src }
            alt={ alt }
            title={ title }
            width={ width }
            height={height }
            { ...otherProps }
        />
    );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

export default Image;