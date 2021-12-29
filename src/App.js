import "./App.css";
import Coin from "./features/Coin/Coin";
import Counter from "./features/Counter/Counter";
import Theme from "./features/theme/Theme";

function App() {
  return (
    <div className="App">
      <Counter />
      <Coin />
      <Theme />
    </div>
  );
}

export default App;
