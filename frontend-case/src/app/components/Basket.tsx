"use client";

import BasketCard from "./cards/BasketCard";
import { Typography } from "antd";
import FormBtn from "./FormBtn";
import styles from "../styles/Basket.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { RootState } from "../store/store";

// interface BasketItem {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   count?: number;
//   image: string;
// }

const Basket = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Sepetten ürün çıkarma
  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id)); // Sepetten ürün çıkarma işlemi
  };

  return (
    <div className={styles.basketContainer}>
      <Typography.Title level={2} className={styles.basketTitle}>
        Your Basket
      </Typography.Title>
      {cartItems.length === 0 ? (
        <Typography>Your basket is empty.</Typography>
      ) : (
        <div className={styles.basketContent}>
          {cartItems.map((item) => (
            <BasketCard
              key={item.id}
              title={item.title}
              description={item.description || ""}
              price={item.price}
              image={item.image}
              onRemove={() => handleRemove(item.id)}
            />
          ))}
        </div>
      )}
      <div className={styles.basketFooter}>
        <Typography className={styles.subtotalText}>Subtotal</Typography>
        <Typography className={styles.totalAmount}>
          ${total.toFixed(2)}
        </Typography>
      </div>
      <FormBtn label="Checkout" onClick={() => alert("Checkout")} />
    </div>
  );
};

export default Basket;
