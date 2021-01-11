import React from 'react';
import Card from './Card';

const CardList = (props) => {
    console.log(props.profiles);
    return (
        <div>
            {props.profiles.map(profile => <Card {...profile} key={profile.id} />)}
        </div>
    )
};

export default CardList;