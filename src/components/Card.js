import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log(props);
    return (
        <div className="info">
            <img src={props.avatar_url} alt="profile pic" width="75"/>
            <div className="name">
                <h2>{props.name}</h2>
            </div>
            <div className="company">
                <span>Company : @{props.company}</span>
            </div>
            <div className="location">
                <span>Location : {props.location}</span>
            </div>
            <div className="blog">
                <span><a href={props.blog} target={"_blank"} rel="noreferrer">Personal Blog</a></span>
            </div>
        </div>
    )
};

export default Card;