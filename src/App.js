import "./App.css";
//
import Header from "./Header/Header";
import Prices from "./Prices/Prices";
import Reciepe from "./Reciepe/Reciepe";
import Vslider from "./Vslider/Vslider";
import News from './News/News'
import Carousel from "./Carousel/Carousel";
import HowItWorks from './HowItWorks/HowItWorks'
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Vslider />
      <Reciepe />
      <Prices />
      <HowItWorks />
      <News />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
