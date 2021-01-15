import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="info">
            <img src={props.avatar_url} alt="profile pic" width="75"/>
            <div className="name">
                <h2>{props.name}</h2>
            </div>
            <div className="company">
                <span>{props.company}</span>
            </div>
        </div>
    )
};

export default Card;