"use client";

import React, { useState, useEffect } from "react";
import { useGetProductsQuery } from "../services/api";
import BasketCard from "./BasketCard";
import { Typography } from "antd";
import FormBtn from "./FormBtn";
import styles from "../styles/Basket.module.css";

interface BasketItem {
  id: number;
  title: string;
  description: string;
  price: number;
  count?: number;
  image: string;
}

const Basket = () => {
  const { data: products, isLoading, error } = useGetProductsQuery(undefined);
  const [basket, setBasket] = useState<BasketItem[]>([]);

  useEffect(() => {
    if (products) {
      setBasket(products.slice(0, 3)); // Sepete 3 ürün ekliyoruz
    }
  }, [products]);

  const removeFromBasket = (id: number) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== id));
  };

  const total = basket.reduce((sum, item) => sum + item.price, 0);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products.</p>;
  }

  return (
    <div className={styles.basketContainer}>
      <Typography.Title level={2} className={styles.basketTitle}>
        Your Basket
      </Typography.Title>
      {basket.length === 0 ? (
        <Typography>Your basket is empty.</Typography>
      ) : (
        <div className={styles.basketContent}>
          {basket.map((item: BasketItem) => (
            <BasketCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              onRemove={() => removeFromBasket(item.id)}
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
