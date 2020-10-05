import './achievements-page.scss'
import React, { useEffect, useState } from 'react';
import { Achievement } from '../../shared/achievement';
import add from '../../assets/add.png'

export const AchievementsPage = ({routes, newRoutes}) => {
    const [userRoutes, setUserRoutes] = useState([]);

    useEffect(() => {
        if (newRoutes.length > 0) {
            setUserRoutes(newRoutes)
        } else setUserRoutes(routes)
    }, [routes, newRoutes]);
    return (
        <div className="achievements-page">{userRoutes &&
        userRoutes.map(el => <Achievement el={el}/>)
        }
        <button className="achievements-page__btn">
            <img src={add}/>
        </button>
        </div>
    )
};
