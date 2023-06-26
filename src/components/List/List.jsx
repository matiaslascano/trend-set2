import React from "react";
import "./list.scss";
import Card from "../Card/Card";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://www.brandel.com.ar/productos_files/articulos/original/15233_2195.jpg?v3",
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
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
