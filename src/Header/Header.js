import React, { useEffect } from "react";
import "./Header.css";
//
import Logo from "../Images/logo/blue_logo.png";

function Header() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const body = document.querySelector("body");
    const menu = document.querySelector(".menuToggle");
    console.log(menu);
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger-active");
      body.classList.toggle("hiddenBody");
      menu.classList.toggle("active-menu");
    });

    function adapt() {
      if (document.documentElement.clientWidth > 1220) {
        // menu.style.display = "none";
        menu.classList.remove("active-menu");
        body.classList.remove("hiddenBody");
        hamburger.classList.remove("hamburger-active");
      }
    }
    window.onload = adapt;
    window.onresize = adapt;
  });

  return (
    <header>
      <nav role="navigation">
        <ul>
          <li>
            <a href="#">Şirkət</a>
            <ul>
              <li>
                <a href="">Haqqımızda</a>
              </li>
              <li>
                <a href="">Xəbərlər</a>
              </li>
              <li>
                <a href="">Vakansiya</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Xidmətlərimiz</a>
            <ul>
              <li>
                <a href="">Təkliflərimiz</a>
              </li>
              <li>
                <a href="">Mağazalar</a>
              </li>
              <li>
                <a href="">Korporativ</a>
              </li>
              <li>
                <a href="">Məntəqələr</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Tariflər</a>
          </li>
          <li>
            <a href="#">Əlaqə</a>
            <ul>
              <li>
                <a href="">Sual-Cavab</a>
              </li>
              <li>
                <a href="">Dəstək</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <img src={Logo} alt="kargo_logo" />
      <div className="header__options">
        <button>DAXİL OL</button>
        <a href="#">QEYDIYYAT</a>
      </div>

      {/* mobile menu */}
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <section className="menuToggle">
        <ul id="menu">
          <div>
            <input type="checkbox" id="collapseOne" />
            <label for="collapseOne">Şirkət</label>

            <li>Haqqımızda</li>
            <li>Xəbərlər</li>
            <li>Vakansiyalar</li>
          </div>
          <div>
            <input type="checkbox" id="collapseTwo" />
            <label for="collapseTwo">Xidmətlərimiz</label>

            <li>Təkliflərimiz</li>
            <li>Korporativ</li>
            <li>Mağazalar</li>
          </div>
          <div>
            <label for="collapse">Tariflər</label>
          </div>
          <div>
            <input type="checkbox" id="collapseThree"/>
            <label for="collapseThree">Əlaqə</label>

            <li>Dəstək</li>
            <li>Sual-Cavab</li>
          </div>
        </ul>
      </section>
    </header>
  );
}

export default Header;
