"use client";
import Basket from "./components/Basket"; // Basket bileşeni
import { Provider } from "react-redux";
import store from "./store/store"; // Redux store

export default function Page() {
  return (
    <Provider store={store}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Welcome to your shopping cart</h2>
        <Basket />
      </div>
    </Provider>
  );
}
