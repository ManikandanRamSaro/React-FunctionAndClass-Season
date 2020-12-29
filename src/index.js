import React from 'react';
import ReactDOM from 'react-dom'

import SeasonDisplay from './SeasonDisplay';
import "semantic-ui-css/semantic.min.css";
class App extends React.Component{
 
    state={ lat : null, errorMessage:''};

    render()
    {
        if(this.state.errorMessage && !this.state.lat)
        {
            return <div> Error : {this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat)
        {
            return <SeasonDisplay latitude={this.state.lat}/>;
        }

        return <div>Loading - this will show as default and removed automcatically (not called) when given condiction executed</div>
    }

    componentDidMount()
    { 
        window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({lat:position.coords.latitude}),
        (err) => this.setState({errorMessage:err.message})
        );
    } 
    
}
ReactDOM.render(<App/>,document.querySelector("#root"));