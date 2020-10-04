import './info.scss'
import React, { useEffect, useState } from 'react';
import { useHttp } from '../../hooks';

export const Info = () => {
    const {request} = useHttp();
    const [info, setInfo] = useState([]);
    useEffect(() => {
        (async () => {
            let {infoArr} = await request("http://localhost:5000/api/info");
            setInfo(infoArr);
        })()
    }, []);
    return (
        <div className="info">
            <div className="info__paragraph">INFO</div>
            <div className="info__data">
                <div className="info__columns">
                    {info.length > 0 && info.map(el => <p className="info__rows">{el}</p>)}
                </div>
            </div>
        </div>
    )
};
