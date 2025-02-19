"use client";
import Basket from "./components/Basket";
import { Provider } from "react-redux";
import store from "./store/store";

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
        <Basket />
      </div>
    </Provider>
  );
}
