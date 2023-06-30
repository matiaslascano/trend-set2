import React from "react";
import "./featuredProducts.scss";
import Card from "../Card/Card";

import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

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
        {error
          ? "Algo salió mal!!"
          : loading
          ? "Loading..."
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
