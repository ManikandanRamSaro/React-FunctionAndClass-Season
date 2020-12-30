import React from 'react';

const Spinner = (props) =>{
    return (
       
            <div class="ui active dimmer">
                <div class="ui big text loader">{props.message}</div>
            </div>  
    );
}

Spinner.defaultProps={
    message:' Loading...'
}

//Spinner".defaultProps" is used to set default values to the Props variables 
export default Spinner;