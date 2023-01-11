import './App.css';
import Person from "./Components/Person";
// import Man from "./Components/Man";
import Demo from "./Components/Demo";

function App() {
  return (
    <div className="App">
      <Demo num="1"></Demo>
      <Person name="ABC" age="20" />
      <Demo num="2"></Demo>
      {/* <Man /> */}
      <Person name="DEF" age="22" />
      <Demo num="3"></Demo>
      <Person name="Ichiki" />
    </div>
  );
}

export default App;
