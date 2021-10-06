import React from "react";
import Titles from "../Title/Title";
import "./Reciepe.css";
//

function Reciepe() {
  return (
    <section className="reciepe">
      <Titles name="Qrama-Qram Tariflər" />
      <section className="reciepe__content">
        <section className="calculator">
          <div className="row">
            <div>Türkiyə</div>
            <div>
              <div className="reciepe__description--text">Məhsul növü</div>
              {/* Select */}
              Standart
            </div>
          </div>
          <div className="row">
              <div>
                <div className="reciepe__description--text">Çəki</div>
                <div className='half--select'>
                    <span>Çəki</span>
                    {/* Select */}
                </div>
              </div>
              <div>
                <div className="reciepe__description--text">En</div>
                <div className='half--select'>
                    <span>En</span>
                    {/* Select */}
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="reciepe__description--text">Uzunluq</div>
                <div className='half--select'>
                    <span>Çəki</span>
                    {/* Select */}
                </div>
              </div>
              <div>
                <div className="reciepe__description--text">Hündürlük</div>
                <div className='half--select'>
                    <span>En</span>
                    {/* Select */}
                </div>
              </div>
            </div>
        </section>
        <section className="prices">
          <div className="price"></div>
        </section>
      </section>
    </section>
  );
}

export default Reciepe;
