import React, { useContext ,useEffect } from 'react';
import { memo } from "react";
import { CartContext } from "../../admin/Cartcontext";
import "./cartsave.css";

const Cartsave = () => {
  const { cart, setCart } = useContext(CartContext);
 
  // Lưu trạng thái giỏ hàng vào localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }, [cart]);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((product) => product.id === item.id);
      if (existingProduct) {
        return prevCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Hàm cập nhật số lượng sản phẩm
  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  // Tính tổng giá của giỏ hàng
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  // Hàm xử lý hành động "Buy Now"
  const handleBuyNow = () => {
    alert("Proceeding to checkout!");
    // Xử lý mua hàng, có thể là chuyển hướng đến trang thanh toán hoặc gửi dữ liệu giỏ hàng
  };

  return (
    <div className="shopping-cart-container">
      <h1 className="shopping-cart-title">Shopping Cart</h1>
      <ul className="shopping-cart-list">
        {cart.length > 0 ? (
          cart.map((item) => (
            <li key={item.id} className="shopping-cart-item">
              {/* Hiển thị hình ảnh sản phẩm */}
              <img
                src={item.image[0]} // Lấy hình ảnh từ thuộc tính 'image'
                alt={item.name}
                className="shopping-cart-item-image"
              />
              
              <span className="shopping-cart-item-name">{item.name}</span> - 
              <span className="shopping-cart-item-price">{item.price} $</span>
              
              <div className="quantity-container">
                <button
                  className="quantity-button"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <span className="item-total">
                Total {(item.price * item.quantity).toFixed(2)} $
              </span>

              <button
                className="shopping-cart-remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>Empty Cart.</p>
        )}
      </ul>

      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total Price: {totalPrice} $</h3>
          <button className="buy-now-button" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(Cartsave);