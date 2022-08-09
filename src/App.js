import "./App.css";
import FetchApi from "./components/FetchApi";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CounterApp from "./components/CounterApp";




function App() {

  return (
    <div>
      <NavBar />
      <CounterApp />
      <FetchApi />
      <Home />
    </div>
  );
}

export default App;
