import React from "react";
import Titles from "../Title/Title";
import "./Reciepe.css";
//

function Reciepe() {
  return (
    <section className="reciepe">
      <Titles name="Kalkulyator" />
      <section className="calculator">
        <div className="row">
          <div>Türkiyə</div>
          <div>
            <div className="reciepe__description--text">Məhsul növü</div>
            {/* Select */}
            <select className="select--big">
              <option selected value="0">
                Standart
              </option>
              <option value="1">Maye</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <div className="reciepe__description--text">Çəki</div>
            <div className="half--select">
              <input type="number" placeholder="Çəki" />
              {/* Select */}
              <select>
                <option selected value="0">
                  kg
                </option>
                <option value="1">lbs</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="reciepe__description--text">En</div>
            <div className="half--select">
              <input type="number" placeholder="En" />
              {/* Select */}
              <select>
                <option selected value="0">
                  sm
                </option>
                <option value="1">inc</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <div className="reciepe__description--text">Uzunluq</div>
            <div className="half--select">
              <input type="number" placeholder="Uzunluq" />
              {/* Select */}
              <select>
                <option selected value="0">
                  sm
                </option>
                <option value="1">inc</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="reciepe__description--text">Hündürlük</div>
            <div className="half--select">
              <input type="number" placeholder="Hündürlük" />
              {/* Select */}
              <select>
                <option selected value="0">
                  sm
                </option>
                <option value="1">inc</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <div className="result--container">
        <div className="calculate--button">
          <button id="calculate--button">HESABLA</button>
          <div id="calculate--button--overlay"></div>
        </div>
        <div id="calculated--result">
          <span>6.00</span>&#36;
          <span>10.20</span>&#8380;
        </div>
      </div>
      <div className="converter">
        <h4>Konverter</h4>
        <div className='converter--wrapper'>
          <div className='converter__country--container' >
            <h6>ABŞ</h6>
            <div className='converter--container__input--container'>
              {/* abs bayraq */}
              <img src="" alt="amerikadan kargo" />
              <input type="number" placeholder='USD' />
            </div>
            <div className='line'></div>
          </div>
          <div className='converter__country--container' >
            <h6>ABŞ</h6>
            <div className='converter--container__input--container'>
              {/* abs bayraq */}
              <img src="" alt="amerikadan kargo" />
              <input type="number" placeholder='USD' />
            </div>
            <div className='line'></div>
          </div>
          <div className='converter__country--container' >
            <h6>ABŞ</h6>
            <div className='converter--container__input--container'>
              {/* abs bayraq */}
              <img src="" alt="amerikadan kargo" />
              <input type="number" placeholder='USD' />
            </div>
            <div className='line'></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reciepe;
