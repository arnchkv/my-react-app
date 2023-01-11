import React, {Component} from 'react';
// import Man from './Man';

class Person extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        // return(
        //     <div>
        //         <h3>Name:</h3><h3>ABC</h3>
        //         <h3>Age</h3><h3>11 years</h3>
        //         <Man />
        //     </div>
            
        // );
        return(
            <div>
                <h1>
                    <i>Dear {this.props.name}, age {this.props.age} years Welcome</i>
                </h1>
            </div>
        );
    }
}

export default Person;