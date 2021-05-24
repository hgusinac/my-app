import React, { Component } from 'react';

class Experiment extends Component {

state = {
    marinNumber:10,
    myColor: 'blue',
};
changeText = event => {
    const { name, value } = event.target
    this.setState(
        {
    [name]: value,
    });
    
};

changeNumber = (event) => {

    const value = event.target.value;
    this.setState({
    marinNumber: value,
    });

};


    render() {
        return (
            <div>
                <h3>My Colo:{this.state.myColor}</h3>
                <h3>My Number:{this.state.marinNumber}</h3>

                <input 
                type="text" 
                value={this.state.myColor} 
                name="myColor" 
                onChange={this.changeText}
                />
                
                <input 
                type="number" 
                value={this.state.marinNumber} 
                name="marginNumber" 
                onChange={this.changeNumber}/>
            </div>
        );
    }
}

export default Experiment;