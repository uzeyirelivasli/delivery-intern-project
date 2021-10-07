import React, { useEffect } from "react";
import Titles from "../Title/Title";
import "./Reciepe.css";
//
import UsaFlag from "../Images/flags/en.svg";
import TrFlag from "../Images/flags/tr.svg";
import AzFlag from "../Images/flags/az.svg";

function Reciepe() {
  useEffect(() => {
    const azn = document.querySelector("#currency--az");
    const usd = document.querySelector("#currency--usd");
    const tr = document.querySelector("#currency--tr");

    // manat base currency 1 manat =>
    const mBaseTr = 5.22;
    const mBaseUsd = 0.59;

    azn.addEventListener("change", () => {
      tr.value = (azn.value * mBaseTr).toFixed(2);
      usd.value = (azn.value * mBaseUsd).toFixed(2);
    });

    tr.addEventListener("change", () => {
      azn.value = (tr.value / mBaseTr).toFixed(2);
      usd.value = (azn.value * mBaseUsd).toFixed(2);
    });

    usd.addEventListener("change", () => {
      azn.value = (usd.value / mBaseUsd).toFixed(2);
      tr.value = (mBaseTr * azn.value).toFixed(2);
    });
  });

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
        <div className="converter--wrapper">
          <div className="converter__country--container">
            <h6>ABŞ</h6>
            <div className="converter--container__input--container">
              {/* abs bayraq */}
              <img src={UsaFlag} alt="amerika" />
              <input type="number" placeholder="USD" id="currency--usd" />
            </div>
            <div className="line"></div>
          </div>
          <div className="converter__country--container">
            <h6>Türkiyə</h6>
            <div className="converter--container__input--container">
              {/* Turkiye bayraq */}
              <img src={TrFlag} alt="turkiye" />
              <input type="number" placeholder="TL" id="currency--tr" />
            </div>
            <div className="line"></div>
          </div>
          <div className="converter__country--container">
            <h6>Azərbaycan</h6>
            <div className="converter--container__input--container">
              {/* az bayraq */}
              <img src={AzFlag} alt="azerbaycan" />
              <input type="number" placeholder="AZN" id="currency--az" />
            </div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reciepe;
