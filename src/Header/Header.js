import React, { useEffect } from "react";
import "./Header.css";
//
import Logo from "../Images/logo/blue_logo.png";

function Header() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const body = document.querySelector("body");
    const menu = document.querySelector('.menuToggle')
    console.log(menu);
    hamburger.addEventListener('click', () =>{
      hamburger.classList.toggle('hamburger-active')
        body.classList.toggle('hiddenBody')
        menu.classList.toggle('active-menu')
      
    })
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

      <div className="menuToggle">
        <ul id="menu">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Info</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
          <a href="https://erikterwan.com/" target="_blank">
            <li>Show me more</li>
          </a>
        </ul>
      </div>
    </header>
  );
}

export default Header;
