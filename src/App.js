import { Component } from 'react';
import './App.css';
import Person from "./Components/Person/Person";
// import Man from "./Components/Man";
// import Demo from "./Components/Demo";

// functional component
// function App() {
//   return (
//     <div className="App">
//       <Person name="ABC" age="20" />
//     </div>
//   );
// }

// class based component
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      demo: "testing"
    }

    this.buttonClickHandler = this.buttonClickHandler.bind(this)
  }

  // buttonClickHandler = () => {
  //   console.log(this.state)
  //   console.log(this.props)
  // }

  // using event binding
  buttonClickHandler() {
    // console.log(this.props)
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <Person name="ABC" age="20" />
        {/* <button onClick={() => this.buttonClickHandler()}>HELLO</button> */}
        {/* <button onClick={this.buttonClickHandler.bind(this)}>HELLO</button> */}
        <button onClick={this.buttonClickHandler}>HELLO</button>
      </div>
    );
  }
}

export default App;
