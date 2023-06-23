import React from "react";
import "./featuredProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2328051/pexels-photo-2328051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Remera Gris mangas cortas",
      isNew: false,
      oldPrice: 5000,
      price: 4300,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Saco marron",
      isNew: true,
      oldPrice: 15000,
      price: 13500,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2063992/pexels-photo-2063992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Camisa de Jean",
      isNew: true,
      oldPrice: 8000,
      price: 6900,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/4355598/pexels-photo-4355598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Pantalon lentejuelas",
      isNew: false,
      oldPrice: 8000,
      price: 6900,
    },
  ];

  return (
    <div className="featured">
      <div className="top">
        <h3>{type} products</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          corrupti minima enim neque nesciunt in veniam similique iusto magni,
          dicta molestiae mollitia dolore culpa, quis vel minus ex recusandae
          maiores.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
