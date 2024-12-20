import React, { useState, useEffect, useRef } from "react";
import products from "../ProductList.json";
import "./ProductListstyle.css";

const ProductList = () => {
  const [randomizedProducts, setRandomizedProducts] = useState([]);
  const carouselRef = useRef(null); // Tham chiếu đến container

  useEffect(() => {
    // Randomize products once on component mount
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
    setRandomizedProducts(shuffledProducts);
  }, []);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "next" ? 220 : -220; // Độ cuộn
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel-wrapper">
      <button className="carousel-control prev" onClick={() => handleScroll("prev")}>
        ❮
      </button>
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-track">
          {randomizedProducts.map((product, index) => (
            <div className="product-item" key={index}>
              <a href={product.productLink}>
                <img src={product.image[0]} alt={product.name} />
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
      </div>
      <button className="carousel-control next" onClick={() => handleScroll("next")}>
        ❯
      </button>
    </div>
  );
};

export default ProductList;
