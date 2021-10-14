import React from "react";
import "./HowItWorks.css";
//
import Title from "../Title/Title";
//
import deliver from "../Images/steps/delivery.svg";
import pay from "../Images/steps/pay.svg";
import register from "../Images/steps/register.svg";
//
import handShake from "../Images/icons/handshake.svg";
import handMoney from "../Images/icons/handmoney.svg";

function HowItWorks() {
  return (
    <section className="how--it--works">
      <Title name="Necə işləyir?" />
      <div className="hiw__content">
        <div>
          <img src={deliver} alt="deliver" />
          <div>
            <h2>Bizə qoşul</h2>
            <h4>Rahat sifariş et</h4>
          </div>
        </div>
        <div className="hiw__content__upside--down">
          <div>
            <h2>Digital</h2>
            <h4>Nağdsız, Qalıqsız, Təhlükəsiz</h4>
          </div>
          <img src={pay} alt="pay" />
        </div>
        <div>
          <img src={register} alt="register" />
          <div>
            <h2>Sürətli</h2>
            <h4>Türkiyədən Birbaşa Siz Seçdiyiniz Ünvana</h4>
          </div>
        </div>
      </div>
      <div className="hiw__content--footer">
        <div>
          <img src={handShake} alt="partnyourumuz olun" />
          <div>
            <h1>Partnyorumuz olun!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div>
          <img src={handMoney} alt="bizimle qazanin" />
          <div>
            <h1>Bizimlə qazanın!</h1>
            <p>
              iDostum sizlər üçün maraqlı təkliflər hazırlayır. Yenilikləri
              qaçırmamaq üçün, sosial platformalarda bizi izləyin!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
