import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = (props) => {
    return (
        <div className="wrapper">
            <div>
                {props.profiles.map(profile => <Card {...profile} key={profile.id} />)}
            </div>
        </div>
    )
};

export default CardList;