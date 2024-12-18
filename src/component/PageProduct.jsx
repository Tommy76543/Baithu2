import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from './ProductList.json'; // Ensure this points to your JSON file
import './PageProduct.css';

const ProductDetail = () => {
  const { productLink } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.productLink === productLink);

  const [selectedImage, setSelectedImage] = useState(product.image[0]); // Ảnh hiển thị chính
  const [isAccordionOpen, setIsAccordionOpen] = useState(false); // State để điều khiển accordion
  const [quantity, setQuantity] = useState(1); // State để theo dõi số lượng sản phẩm

  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (item, quantity) => {
    const savedCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingProductIndex = savedCart.findIndex((product) => product.id === item.id);
    
    if (existingProductIndex > -1) {
      // Nếu có, cập nhật số lượng của sản phẩm trong giỏ hàng
      savedCart[existingProductIndex].quantity += quantity;
    } else {
      // Nếu không có, thêm sản phẩm mới với số lượng
      savedCart.push({ ...item, quantity });
    }

    localStorage.setItem('shoppingCart', JSON.stringify(savedCart));
    alert('product has been added to cart');
    navigate('/Shopping-cart'); // Điều hướng về trang giỏ hàng nếu cần
  };

  // Hàm thay đổi trạng thái của accordion
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  // Hàm điều chỉnh số lượng
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

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
                className={`thumbnail-image ${selectedImage === imgUrl ? 'active' : ''}`}
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

          {/* Điều chỉnh số lượng */}
          <div className="quantity-control">
            <button onClick={decrementQuantity} className="quantity-button">-</button>
            <span className="quantity-display">{quantity}</span>
            <button onClick={incrementQuantity} className="quantity-button">+</button>
          </div>

          <button
            onClick={() => addToCart(product, quantity)}
            className="buy-button"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
      <div className="description">
        <hr align="center" width="70%" color="#c9a22e" />
        {/* Accordion description */}
        <button
          className={`accordion ${isAccordionOpen ? 'active' : ''}`}
          onClick={toggleAccordion}
        >
          Description
        </button>
        <div className={`panel ${isAccordionOpen ? 'active' : ''}`}>
          {/* Hiển thị mô tả sản phẩm từ JSON */}
          <p>{product.description}</p>
        </div>
        <hr align="center" width="70%" color="#c9a22e" />
      </div>
    </div>
  );
};

export default ProductDetail;
