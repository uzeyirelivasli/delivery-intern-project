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

    // ---------------------- calculator
    const calculateButton = document.querySelector("#calculate--button");

    const calculateFunction = () => {
      let weight = +document.querySelector("#weight").value;
      let weightUnit = +document.querySelector("#weight--unit").value;

      let width = +document.querySelector("#width").value;
      let widthUnit = +document.querySelector("#width--unit").value;

      let length = +document.querySelector("#length").value;
      let lengthUnit = +document.querySelector("#length--unit").value;

      let height = +document.querySelector("#height").value;
      let heightUnit = +document.querySelector("#height--unit").value;

      let result;

      if (weight === 0) {
        result = 0;
        return result;
      } else if (weightUnit === 1) {
        weight *= 0.45;
      }

      if (width && length && height) {
        widthUnit === 1 ? (width *= 2.54) : (width = width);
        lengthUnit === 1 ? (length *= 2.54) : (length = length);
        heightUnit === 1 ? (height *= 2.54) : (height = height);
      }

      console.log(width, length, height);
    };

    calculateButton.addEventListener("click", calculateFunction);
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
              <input type="number" placeholder="Çəki" id="weight" />
              {/* Select */}
              <select id="weight--unit">
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
              <input type="number" placeholder="En" id="width" />
              {/* Select */}
              <select id="width--unit">
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
              <input type="number" placeholder="Uzunluq" id="length" />
              {/* Select */}
              <select id="length--unit">
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
              <input type="number" placeholder="Hündürlük" id="height" />
              {/* Select */}
              <select id="height--unit">
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
              <img src={UsaFlag} alt="amerika" />
              <input type="number" placeholder="USD" id="currency--usd" />
            </div>
            <div className="line"></div>
          </div>
          <div className="converter__country--container">
            <h6>Türkiyə</h6>
            <div className="converter--container__input--container">
              <img src={TrFlag} alt="turkiye" />
              <input type="number" placeholder="TL" id="currency--tr" />
            </div>
            <div className="line"></div>
          </div>
          <div className="converter__country--container">
            <h6>Azərbaycan</h6>
            <div className="converter--container__input--container">
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
