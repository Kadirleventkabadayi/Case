"use client";
import { Provider } from "react-redux";
import store from "./store/store";
import HomePage from "./components/HomePage";

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
        <HomePage />
      </div>
    </Provider>
  );
}
