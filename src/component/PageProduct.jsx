import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../pages/admin/Cartcontext";
import products from "./ProductList.json";
import "./PageProduct.css";

const ProductDetail = () => {
  const { productLink } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.productLink === productLink);
  const [selectedImage, setSelectedImage] = useState(product.image[0]);
  const [quantity, setQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState(false);


  if (!product) {
    return <h2>Product not found</h2>;
  }

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  
  return (
    <div className="body-detail">
      <div className="product-detail">
        <div className="image-gallery">
          <img
            src={selectedImage}
            alt={product.name}
            className="main-image Page-img"
          />
          <div className="thumbnail-gallery">
            {product.image.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`Thumbnail ${index}`}
                className={`thumbnail-image ${selectedImage === imgUrl ? 'active' : ''}`}
                onClick={() => setSelectedImage(imgUrl)}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="price-info">Price: ${product.price.toFixed(2)}</p>

          <div className="product-colors">
            {product.color.map((color, index) => (
              <div
                key={index}
                className="color-list"
                style={color.style}
                title={color.value}
              ></div>
            ))}
          </div>

          <div className="quantity-control">
            <button onClick={decrementQuantity} className="quantity-button">-</button>
            <span className="quantity-display">{quantity}</span>
            <button onClick={incrementQuantity} className="quantity-button">+</button>
          </div>

          <button
            onClick={() => {
              addToCart(product, quantity);
              alert("Product added to cart!");
              navigate("/Shopping-cart");
            }}
            className="buy-button"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>

      <div className="description">
  <hr align="center" width="70%" color="#c9a22e" />
  <button onClick={toggleDescription} className="accordion">
    {showDescription ? "Description V" : "Description >"}
  </button>
  <div className={`panel ${showDescription ? "show" : ""}`}>
    <p>{product.description}</p>
  </div>
  <hr align="center" width="70%" color="#c9a22e" />
</div>
    </div>
  );
};

export default ProductDetail;
