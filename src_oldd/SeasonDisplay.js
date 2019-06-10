import React from 'react';

const getSeason = (lat , month)=>{
    console.log(lat);
    console.log(month);
    if(month>2 && month<6) {
        return lat>0 ? 'Summer' : 'winter';
    } 
}
const SeasonDisplay = (props)=>{
    console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season ==='winter' ? 'Burr its cool':'Ohh its too hot here';
    const icon = season === 'winter' ? 'snowflake':'sun';
    return (
        <div>
           <i className={`massive ${icon} icon`}></i>
            <h1>{ text }</h1>
            <i className={`massive ${icon} icon`}></i>
        </div>);
};

export default SeasonDisplay;