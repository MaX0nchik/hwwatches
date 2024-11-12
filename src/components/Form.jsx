import React, { useState } from "react";


export class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            city:"",
            offset:"",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(event, this.state);
    }

    handleNameChange = (event) => {
        const {target} = event;
        const {name, value} = target;
        if (name === "city"){            
            this.setState((_state, _props)=>({city: value}));
        }
        else if (name === "offset" && (/^\-?[0-9]?[0-9]?$/.test(value))){
            this.setState((_state, _props)=>({offset: value}))
        }        
    }

    render(){
        return(
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <div>
                    <span className="dt">Название</span>
                    <span className="km">Временная зона</span>
                </div>
                <input type="text" name="city"  onChange={this.handleNameChange}/>
                <input type="text" name="offset"  onChange={this.handleNameChange}/>
                <input type="submit" name="butAdd" value="Добавить"/>
            </form>
            </div>
        )
    }

}

export default Form;
