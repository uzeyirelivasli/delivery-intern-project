import React from "react";
import "./Price.css";

function Price({weight,price}) {
  return (
    <div className="price">
      <div className="price__weight">{weight} kg</div>
      <div className="price__content">
        <div className="price__standart">
          <div className="price__standart__title">Standart</div>
          <div className="standart__price">
            kg x <span>{price}$</span>
          </div>
        </div>
        <div className="price__liquid">
          <div className="price__liquid__title">Maye</div>
          <div className="liquid__price">
            kg x <span>{price}$</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
