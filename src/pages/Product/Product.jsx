import React, { useState } from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://www.brandel.com.ar/productos_files/articulos/original/15233_2195.jpg?v3",
    "https://www.brandel.com.ar/productos_files/articulos/sitio/producto_426/15233_2195_2.jpg?v3",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>REMERA RACHEL</h1>
        <span className="price">$12.132</span>
        <p>
          Realizado en Jersey con un proceso de corrosión, tratamiento que le
          aporta a la prenda un efecto desgastado y una textura visual súper
          interesante. Estampa dibujo águila y texto como mucho estilo. Manga
          corta, escote redondo, largo a la cadera. Calce clásico.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> AGREGAR AL CARRITO
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> AGREGAR A FAVORITOS
          </div>
          <div className="item">
            <BalanceIcon /> COMPARAR
          </div>
        </div>
        <div className="info">
          <span>Tipo de producto: Remera</span>
          <span>Tag: Remera, Mujer, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPCION</span>
          <hr />
          <span>INFORMACION ADICIONAL</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
