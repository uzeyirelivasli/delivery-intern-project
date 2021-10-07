import "./App.css";
//
import Header from "./Header/Header";
import Prices from "./Prices/Prices";
import Reciepe from "./Reciepe/Reciepe";
import Vslider from "./Vslider/Vslider";

function App() {
  return (
    <div className="App">
      <Header />
      <Vslider />
      <Reciepe />
      <Prices />
    </div>
  );
}

export default App;
