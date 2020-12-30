import React from 'react';
import ReactDOM from 'react-dom'

import SeasonDisplay from './SeasonDisplay';
import "semantic-ui-css/semantic.min.css";

import Spinner from './Spinner';
class App extends React.Component{
 
    state={ lat : null, errorMessage:''};

    componentDidMount()
    { 
        window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({lat:position.coords.latitude}),
        (err) => this.setState({errorMessage:err.message})
        );
    } 
    
    helperRenderMethod()
    {
        if(this.state.errorMessage && !this.state.lat)
        {
            return <div> Error : {this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat)
        {
            return <SeasonDisplay latitude={this.state.lat}/>;
        }
        return <Spinner  message="Please click Allow to get Location"/>;
       // return <div>Loading - this will show as default and removed automcatically (not called) when given condiction executed</div>

    }
    render()
    {
        return (
            <div className="set-border">
                {this.helperRenderMethod()}
            </div>
        )
    }

 
    
}
ReactDOM.render(<App/>,document.querySelector("#root"));