import React from "react";
import "./News.css";
//
import Title from "../Title/Title";
import TheNew from "../TheNew/TheNew";
//
import firstNew from "../Images/news/1.jpg";
import secondtNew from "../Images/news/2.jpg";
import thirdNew from "../Images/news/3.jpg";

function News() {
  return (
    <section className="news">
      <Title name="Xəbərlər" />
      <div className="news__content">
        <TheNew
          img={firstNew}
          title="ilk dəfə Türkiyədədn Azərbaycana birbaşa siz seçdiyiniz ünvana!"
          date="26.02.2021"
        />
        <TheNew img={secondtNew} title="Nağdsız ödəmələr" date="24.01.2021" />
        <TheNew img={thirdNew} title="Qrama-Qram qiymətlər" date="20.12.2020" />
      </div>
      <div className="show--all--news">
        <a href="/all-news">{">"}</a>
      </div>
    </section>
  );
}

export default News;
