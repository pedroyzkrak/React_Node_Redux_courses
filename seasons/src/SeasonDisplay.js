import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';


import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        seasonText: 'Damn boy, let us hit the beach!',
        seasonIcon: 'sun'
    },
    winter: {
        seasonText: 'Burr, it is chilly!',
        seasonIcon: 'snowflake'
    }
};


const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.late, new Date().getMonth());
    const { seasonText, seasonIcon } = seasonConfig[season]
    return (
    
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${seasonIcon} icon`} />
            <h1>{ seasonText }</h1>
            <i className={`icon-right massive ${seasonIcon} icon`} />
        </div>
    );
};


export default SeasonDisplay;