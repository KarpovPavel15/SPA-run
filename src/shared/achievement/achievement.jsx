import React from 'react';
import './achievement.scss'
import image from '../../assets/icon.svg'

export const Achievement = ({el}) => {
    return (
        <div className="achievement">
            <div className="achievement__image-area"><img src={image}/></div>
            <div className="achievement__info">
                <p>{el.data}</p>
                <p>Distance: {el.distance}</p>
                <p>Speed: {el.speed}</p>
                <p>Time: {el.time}</p>
            </div>
        </div>
    )
};
