import "./App.css";
//
import Header from "./Header/Header";
import Prices from "./Prices/Prices";
import Reciepe from "./Reciepe/Reciepe";
import Vslider from "./Vslider/Vslider";
import News from './News/News'

function App() {
  return (
    <div className="App">
      <Header />
      <Vslider />
      <Reciepe />
      <Prices />
      <News />
    </div>
  );
}

export default App;
