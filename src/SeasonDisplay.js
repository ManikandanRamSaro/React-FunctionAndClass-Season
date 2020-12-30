import './SeasonDisplay.css';
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

const GetSeasonByObject ={
    Winter :{
        text : 'Kulirkalam',iconName :'snowflake'
    },
    Summer :{
        text : 'Veiyalkaalam',iconName :'sun outline'
    }
}

const SeasonDisplay = (props) =>
{
    const season = getSeason(props.latitude,new Date().getMonth());
    const output = season === 'Winter' ? 'Kulirkalam' : 'Veiyalkaalam';  // terinery expression for text display
    const icon = season === 'Winter' ? 'snowflake' : 'sun outline';  // terinery expression for icon display
   // console.log(GetSeasonByObject[season]);
   const {text,iconName} =GetSeasonByObject[season]; 
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
             <h1>{text}</h1>
             <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;