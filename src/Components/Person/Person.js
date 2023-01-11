import React, { Component } from 'react';
// import Man from './Man';
import './Person.css'

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

        const style = {
            fontSize: "40px",
            color: "red"
        }

        return (
            <div className='PersonBox'>
                <h1>
                    <label className='PersonLabel'>Name</label> : <i>{this.props.name}</i>
                    <br />
                    <label style={style}>Age</label> : <i>{this.props.age}</i>
                </h1>
            </div>
        );
    }
}

export default Person;