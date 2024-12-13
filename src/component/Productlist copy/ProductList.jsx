import React from "react";
import products from "../ProductList.json";
import "./ProductListstyle.css";

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div className="product-item" key={index}>
          <a href={product.productLink}>
            <img src={product.image} alt={product.name} />
          </a>
          <h3 className="product-name">{product.name}</h3>
          <div className="product-colors">
            {product.colors &&
              product.colors.map((color, i) => (
                <div
                  key={i}
                  className="color-dot"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
          </div>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
