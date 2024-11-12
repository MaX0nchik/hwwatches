import React from "react";

export class Watch extends React.Component {
    tID = 0;

    constructor(props){
        super(props)

        const {city, offset} = this.props;

        this.state = {
            city:city,
            date: this.getDate(offset),
            offset:offset
        };
    }

    componentDidMount(){
        this.tID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.tID);
    }

    getDate(offset){
        let userOffset = new Date().getTimezoneOffset() / 60 ;
        return new Date(Date.now() + (+userOffset + +offset) * (60 * 60 * 1000) );
    }

    tick(){
        this.setState(
            {
                date: this.getDate(this.state.offset)
            }
        );
    }

    getArrowStyle(value, arrowType) {
        const deg = value * 360.0 / ((arrowType === 'hours') ? 12.0 : 60.0);
        const size = (arrowType === 'seconds') ? 60 : (arrowType === 'minutes') ? 50 : 40;
        const translateSize = size / 2;
        return {
          transform: `translate(0, ${translateSize}px) rotate(${deg}deg) translate(0, -${translateSize}px)`
        };
      }

    render(){
        return(
             <div className='watch-container'>
             <div>{this.state.city}</div>
             <div className='watch'>
                <div className='arrow seconds' style={this.getArrowStyle(this.state.date.getSeconds(), 'seconds')}></div>
                <div className='arrow minutes' style={this.getArrowStyle(this.state.date.getMinutes(), 'minutes')}></div>
                <div className='arrow hours' style={this.getArrowStyle(this.state.date.getHours(), 'hours')}></div>
            </div>
            <div>{this.state.date.toLocaleTimeString()}</div>
            </div>
        )
    }
}