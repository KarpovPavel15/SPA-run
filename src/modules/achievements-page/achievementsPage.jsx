import './achievements-page.scss'
import React, { useEffect, useState } from 'react';
import { Achievement } from '../../shared/achievement';

export const AchievementsPage = ({routes}) => {
    const [userRoutes, setUserRoutes] = useState([]);

    useEffect(() => setUserRoutes(routes),[routes]);
    return (
        <div className="achievements-page">{userRoutes &&
        userRoutes.map(el => <Achievement el={el}/>)
        }</div>
    )
};
