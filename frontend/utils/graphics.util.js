import React from 'react';
import { Link, NavLink, Redirect}from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const createIcon = (icon, className, size, id, fcn) => {
    return(
        <FontAwesomeIcon
            icon={icon}
            className={`${className}`}
            id={id}
            size={size}
            onClick={fcn}
        />
    )   
}

export const createSpinIcon = (icon, className, size) => {
    return(
        <FontAwesomeIcon
            icon={icon}
            spin
            className={`${className}`}
            size={`${size}`}
        />
    ) 
}

export const createButtonLink = (path, linkId, className, id, content) => {
    return(
        <Link to={path} id={linkId}>
            <button className={className} id={id}>
                {content}
            </button>
        </Link>
    )
}