"use client";
import Basket from "../components/Basket";

const HomePage: React.FC = () => {
  return (
    <div className="layout" style={{ minHeight: "100vh", width: "100%" }}>
      <div style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Basket />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
