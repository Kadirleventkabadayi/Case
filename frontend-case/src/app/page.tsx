"use client";
import HomePage from "./components/HomePage";

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HomePage />
    </div>
  );
}
