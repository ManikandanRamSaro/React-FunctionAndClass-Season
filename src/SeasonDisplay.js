import React from 'react';

const getSeason = (lat,month)=>{
    if(month>2 && month<9)
    {
        return lat > 0 ? "Summer" : "Winter";
    }
    else
    {
        return lat > 0 ?  "Winter" : "Summer" ;
    }
}

const SeasonDisplay = (props) =>
{
    const season = getSeason(props.latitude,new Date().getMonth());
    const output = season === 'Winter' ? 'Kulirkalam' : 'Veiyalkaalam';  // terinery expression for text display
    const icon = season === 'Winter' ? 'snowflake' : 'sun outline';  // terinery expression for icon display

    return (
        <div>
            <i className={`${icon} icon`}></i>
             <h1>{output}</h1>
             <i className={`${icon} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;