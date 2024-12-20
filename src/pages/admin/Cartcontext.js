import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("shoppingCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (item, quantity = 1) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((product) => product.id === item.id);
      if (existingProduct) {
        return prevCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

   // Tính tổng số lượng sản phẩm trong giỏ hàng
   const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, totalQuantity  }}>
      {children}
    </CartContext.Provider>
  );
};
