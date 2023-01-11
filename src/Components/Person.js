import React, { Component } from 'react';
// import Man from './Man';

class Person extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            name: "ABC",
            age: 25
        }
    }

    nameChangeHandler() { 
        console.log(this.state)
        this.setState({name: "vddfee", age: 43}, () => {
            console.log(this.state)
        })
    }

    render() {
        // return(
        //     <div>
        //         <h3>Name:</h3><h3>ABC</h3>
        //         <h3>Age</h3><h3>11 years</h3>
        //         <Man />
        //     </div>

        // );
        return (
            <div>
                <h1>
                    <i>Dear {this.state.name}, {this.state.age} years Welcome</i>
                    <br />
                    <button onClick={this.nameChangeHandler.bind(this)}>Click Me</button>
                </h1>
            </div>
        );
    }
}

export default Person;