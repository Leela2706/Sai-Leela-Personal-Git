import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import HOC_count from './HOC_Components/HOC_Counter';
import ClickCounter from './HOC_Components/ClickCounter';
import Hover_Counter from './HOC_Components/Hover_Counter';

function App() {
  return (
    <div className="App">
      {/* <Main/>npm  */}
      <ClickCounter/>
      <Hover_Counter/>
    </div>
  );
}

export default App;
