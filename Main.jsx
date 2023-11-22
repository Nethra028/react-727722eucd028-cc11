import React, {Component} from 'react';
import Title from './Tiltle.jsx';
import Clock from './Clock.jsx';
import './index.css';
class Main extends Component{
    render(){
        return(  
        <div>
            <Title title="Digital Clock"></Title>
            <Clock clock="ClockData"></Clock>
        </div>
        )
        
    }
}
export default Main