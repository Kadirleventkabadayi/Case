"use client";

import React, { useState, useEffect } from "react";
import { useGetProductsQuery } from "../services/api";

interface BasketItem {
  id: number;
  title: string;
  price: number;
  count?: number;
}

const Basket = () => {
  const { data: products, isLoading, error } = useGetProductsQuery(undefined);

  const [basket, setBasket] = useState<BasketItem[]>([]);

  useEffect(() => {
    if (products) {
      setBasket(products);
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
    <div>
      <h2>Your Basket</h2>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul>
          {basket.map((item: BasketItem) => (
            <li key={item.id}>
              {item.title} - ${item.price.toFixed(2)} - {item.count} in basket
              <button onClick={() => removeFromBasket(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Basket;
