import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">
              Mujeres
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Hombres
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Niños
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">
              Accesorios
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            TREND<span>SET</span>
          </Link>
        </div>
        <div className="right">
          <div>
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="link" to="/">
              Nosotros
            </Link>
          </div>
          <div>
            <Link className="link" to="/">
              Contacto
            </Link>
          </div>
          <div className="icons">
            <SearchOutlinedIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
