import React from "react";
import "./cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://www.brandel.com.ar/productos_files/articulos/original/15233_2195.jpg?v3",
      title: "REMERA RACHEL",
      desc: "REMERA RACHEL",
      isNew: false,
      oldPrice: 14000,
      price: 12.132,
    },
    {
      id: 2,
      img: "https://www.brandel.com.ar/productos_files/articulos/original/15235_5.jpg?v3",
      title: "REMERA ZALI",
      desc: "REMERA ZALI",
      isNew: false,
      oldPrice: 9500,
      price: 8.706,
    },
  ];
  return (
    <div className="cart">
      <h1>Productos en su Carrito</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h4>{item.title}</h4>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>CONFIRMAR PEDIDO</button>
      <span className="reset">Vaciar Carrito</span>
    </div>
  );
};

export default Cart;
