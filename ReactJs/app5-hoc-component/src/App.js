import logo from './logo.svg';
import './App.css';
import ClickCounter from './HOC_Components/ClickCounter';
import Hover_Counter from './HOC_Components/Hover_Counter';

function App() {
  return (
    <div className="App">
     <ClickCounter/>
     <Hover_Counter/>
    </div>
  );
}

export default App;
