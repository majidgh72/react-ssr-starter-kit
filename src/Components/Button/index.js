import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';

function Button( props ) {

    const {
        btnType,
        theme,
        path,
        children,
        className
    } = props;

    return (
        <Link
            className={
                classNames(
                    styles.Button,
                    styles[ theme ],
                    className
                )
            }
            to={ path }
        >{ children }</Link>
    );
}

Button.propTypes = {
    btnType: PropTypes.oneOf(['link', 'button']),
    path: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]).isRequired,
};

export default Button;