import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>Nueva Temporada</span>}
          <img src={item.img} alt="" className="imageCard" />
        </div>
        <h4 className="title">{item.title}</h4>
        <div className="prices">
          <h5>${item.oldPrice}</h5>
          <h5>${item.price}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
