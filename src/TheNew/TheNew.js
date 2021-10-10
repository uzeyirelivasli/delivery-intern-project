import React from "react";
import "./TheNew.css";
//

function TheNew({img,title,date}) {
  return (
    <div className="the--new">
      <a href="/news">
        <div className="the--new__img">
          <img src={img} alt={title} />
        </div>
        <h4>{title}</h4>
        <h5>{date}</h5>
      </a>
    </div>
  );
}

export default TheNew;
