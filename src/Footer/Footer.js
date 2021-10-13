import React from "react";
import "./Footer.css";
import Logo from "../Images/logo/129225.svg";
//
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import {GoLocation} from 'react-icons/go'
import {RiMessage2Line} from 'react-icons/ri'
import {BsTelephone} from 'react-icons/bs'
import {IoPhonePortraitOutline} from 'react-icons/io5'


function Footer() {

    const iconStyle = {
        fontSize: '25px',
        color: '#753a88'
     }

  return (
    <footer>
      <div className="footer__media">
        <div>
          <a href="">
            <FaFacebookF />
          </a>
        </div>
        <div>
          <a href="">
            <FaInstagram />
          </a>
        </div>
        <div>
          <a href="">
            <FaYoutube />
          </a>
        </div>
        <div>
          <a href="">
            <FaTwitter />
          </a>
        </div>
      </div>
      <img src={Logo} alt="blue" />
      <ul>
          <li>Şirkət</li>
          <li>Xidmətlərimiz</li>
          <li>Tariflər</li>
          <li>Əlaqə</li>
      </ul>
      <ul>
          <li>Sual-Cavab</li>
          <li>Şərtlər və Qaydalar</li>
          <li>Gizlilik şərtləri</li>
          <li>Qadağan edilmiş məhsullar</li>
      </ul>
      <ul>
          <li><GoLocation style={iconStyle} /> Bakı şəhəri, Süleyman Sani Axundov 31</li>
          <li><RiMessage2Line style={iconStyle} /> info@idostum.com</li>
          <li><BsTelephone style={iconStyle} /> Mənə zəng et</li>
          <li><IoPhonePortraitOutline style={iconStyle} />  Mobil tətbiq - Tezliklə</li>
      </ul>
    </footer>
  );
}

export default Footer;
