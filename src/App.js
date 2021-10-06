import "./App.css";
//
import Header from "./Header/Header";
import Reciepe from "./Reciepe/Reciepe";
import Vslider from "./Vslider/Vslider";

function App() {
  return (
    <div className="App">
      <Header />
      <Vslider />
      <Reciepe />
    </div>
  );
}

export default App;
