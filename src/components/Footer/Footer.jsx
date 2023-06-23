import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h3>Categorias</h3>
          <span>Mujeres</span>
          <span>Hombres</span>
          <span>Niños</span>
          <span>Accesorios</span>
          <span>Nuevos Arribos</span>
        </div>
        <div className="item">
          <h3>Links</h3>
          <span>FAQ</span>
          <span>Páginas</span>
          <span>Tiendas</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h3>Nosotros</h3>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            consequatur maiores dolor sapiente quam, quisquam nam nostrum
            possimus, iusto consequuntur labore impedit, tempore debitis. Odit
            eligendi minus architecto unde voluptates.
          </span>
        </div>
        <div className="item">
          <h3>Contacto</h3>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
            porro deleniti. Impedit totam tenetur alias molestias eveniet enim
            maiores asperiores odit, consectetur saepe. Ipsam rerum et sequi
            suscipit dolorem officia.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="center">
          <Link className="link" to="/">
            TREND<span>SET</span>
          </Link>
          <div className="copyright">
            ©Copyright 2023. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
