import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from './ProductList.json'; // Ensure this points to your JSON file
import "./PageProduct.css";

const ProductDetail = () => {
  const { productLink } = useParams();
  const product = products.find((p) => p.productLink === productLink);

  const [selectedImage, setSelectedImage] = useState(product.image[0]); // Ảnh hiển thị chính
  const [isAccordionOpen, setIsAccordionOpen] = useState(false); // State để điều khiển accordion

  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Hàm thay đổi trạng thái của accordion
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="body-detail">
    <div className="product-detail">
      {/* Gallery chính */}
      <div className="image-gallery">
        <img
          src={selectedImage}
          alt={product.name}
          className="main-image Page-img"
        />
        {/* Danh sách thumbnail */}
        <div className="thumbnail-gallery">
          {product.image.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              alt={`Thumbnail ${index}`}
              className={`thumbnail-image ${
                selectedImage === imgUrl ? "active" : ""
              }`}
              onClick={() => setSelectedImage(imgUrl)}
            />
          ))}
        </div>
      </div>

      {/* Thông tin sản phẩm */}
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price-info">Price: ${product.price.toFixed(2)}</p>

        {/* Hiển thị danh sách màu sắc */}
        <div className="product-colors">
          {product.color.map((color, index) => (
            <div
              key={index}
              className="color-list"
              style={{
                backgroundColor: color.style.backgroundColor,
                border: color.style.border,
              }}
              title={color.value}
            ></div>
          ))}
        </div>

        <a href={product.productLink} className="buy-button">Buy Now</a>
      </div>
      </div>
          <div className='description'>
          <hr align="center" width="70%" color="#c9a22e" />
      {/* Accordion description */}
      <button
        className={`accordion ${isAccordionOpen ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        Description
      </button>
      <div className={`panel ${isAccordionOpen ? "active" : ""}`}>
        {/* Hiển thị mô tả sản phẩm từ JSON */}
        <p>{product.description}</p>
      </div>
      <hr align="center" width="70%" color="#c9a22e" />
      </div>
    </div>
  );
};

export default ProductDetail;
