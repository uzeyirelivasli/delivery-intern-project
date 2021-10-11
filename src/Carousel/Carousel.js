import React, { useEffect } from "react";
import "./Carousel.css";
// 
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//
import firstStore from "../Images/store/store-1.png";
import secondStore from "../Images/store/store-2.png";
import thirdStore from "../Images/store/store-3.png";
import fourthStore from "../Images/store/store-4.png";
import fifthStore from "../Images/store/store-5.png";
import sixthStore from "../Images/store/store-6.png";
import seventhStore from "../Images/store/store-7.png";
import eightthStore from "../Images/store/store-8.png";
import ninethStore from "../Images/store/store-9.png";
import tenthStore from "../Images/store/store-10.png";

function Carousel() {

    const responsive = {
                    0: { items: 3 },
                    700: { items: 3 },
                    1000: { items: 7, dots: false }
    }

  return (
    <OwlCarousel className="owl-theme" 
            margin ={40}
            loop
                  autoWidth={false}
                  items={10}
                  autoplay={true}
                  dots={false}
                  autoplayTimeout={3000}
                  smartSpeed={3000}
                  animateIn='linear'
                  animateOut='linear'
                  responsive={responsive}
            
            
            >
      <div class="flex-block">
        <a
          href="http://idostum.link/r?url=https://Trendyol.com.tr"
          target="_blank"
        >
          <img src={firstStore} alt="Trendyol.com.tr" />
        </a>
      </div>
      <div class="flex-block  ">
        <a
          href="http://idostum.link/r?url=https://defacto.com.tr"
          target="_blank"
        >
          <img src={secondStore} alt="Defacto" />
        </a>
      </div>
      <div class="flex-block">
        <a
          href="http://idostum.link/r?url=https://www.lcwaikiki.com/tr-TR/TR"
          target="_blank"
        >
          <img src={thirdStore} alt="Lc Waikiki " />
        </a>
      </div>
      <div class="flex-block">
        <a href="http://idostum.link/r?url=https://www.n11.com" target="_blank">
          <img src={fourthStore} alt="n11" />
        </a>
      </div>
      <div class="flex-block">
        <a
          href="http://idostum.link/r?url=https://www.pierrecardin.com.tr"
          target="_blank"
        >
          <img src={fifthStore} alt="Pierre Cardin" />
        </a>
      </div>
      <div class="flex-block">
        <a
          href="http://idostum.link/r?url=https://shop.mango.com/tr"
          target="_blank"
        >
          <img src={sixthStore} alt="Mango" />
        </a>
      </div>
      <div class="flex-block">
        <a
          href="http://idostum.link/r?url=https://www.zara.com/tr/"
          target="_blank"
        >
          <img src={seventhStore} alt="Zara" />
        </a>
      </div>
      <div class="flex-block">
        <a
          href="http://idostum.link/r?url=https://www.flo.com.tr"
          target="_blank"
        >
          <img src={eightthStore} alt="Flo" />
        </a>
      </div>
      <div class="flex-block">
        <a href="http://idostum.link/r?url=www.colins.com.tr" target="_blank">
          <img src={ninethStore} alt="Colins" />
        </a>
      </div>
      <div class="flex-block">
        <a
          href="http://idostum.link/r?url=https://www.bershka.com/tr"
          target="_blank"
        >
          <img src={tenthStore} alt="Bershka" />
        </a>
      </div>
    </OwlCarousel>
  );
}

export default Carousel;
