import React, {Component} from 'react';
import Man from './Man';

class Person extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div>
                <h3>Name:</h3><h3>ABC</h3>
                <h3>Age</h3><h3>11 years</h3>
                <Man />
            </div>
            
        );
    }
}

export default Person;