"use client";

import { useState } from "react";
import Basket from "./components/Basket";

export default function Home() {
  const [items, setItems] = useState([
    { id: 0, name: "asd", price: 12 },
    { id: 1, name: "qwe", price: 34 },
    { id: 2, name: "zxc", price: 56 },
  ]);

  const onRemoveItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
    console.log(`Remove item with id: ${id}`);
  };

  return (
    <div>
      <Basket items={items} onRemoveItem={onRemoveItem} />
    </div>
  );
}
