import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch,  faMapPin, faSignOutAlt, faStroopwafel} from '@fortawesome/free-solid-svg-icons';

export const createIcon = (name, className, size) => {
    return(
        <FontAwesomeIcon
            icon={name}
            className={`${className}`}
            size={`${size}`}
        />
    )   
}

export const createSpinIcon = (name, className, size) => {
    return(
        <FontAwesomeIcon
            icon={name}
            spin
            className={`${className}`}
            size={`${size}`}
        />
    ) 
}