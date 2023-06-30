import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>Nueva Temporada</span>}
          <img
            src={
              import.meta.env.VITE_API_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="imageCard"
          />
        </div>
        <h4 className="title">{item?.attributes.title}</h4>
        <div className="prices">
          <h5>${item.oldPrice || item?.attributes.price * 1.2}</h5>
          <h5>${item?.attributes.price}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
