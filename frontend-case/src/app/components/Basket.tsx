"use client";

import React, { useState, useEffect } from "react";
import { useGetProductsQuery } from "../services/api";
import BasketCard from "./BasketCard"; // BasketCard bileşenini import ettik

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

  // API'den ürün verisi geldiğinde sepete yerleştiriyoruz
  useEffect(() => {
    if (products) {
      setBasket(products);
    }
  }, [products]);

  // Sepetten ürün silme fonksiyonu
  const removeFromBasket = (id: number) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== id));
  };

  // Sepet toplamını hesaplama
  const total = basket.reduce((sum, item) => sum + item.price, 0);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products.</p>;
  }

  return (
    <div>
      <h2>Your Basket</h2>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
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
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Basket;
