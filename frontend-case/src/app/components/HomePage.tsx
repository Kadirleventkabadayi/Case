import React, { useState, useEffect } from "react";
import { useGetProductsQuery } from "../services/api";
import MainCard from "./cards/MainCard";
import { Layout, Menu, Typography } from "antd";
import Basket from "./Basket";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

interface MaintItem {
  id: number;
  title: string;
  category: string;
  price: number;
  count?: number;
  image: string;
  rating: { rate: number; count: number };
}

const HomePage: React.FC = () => {
  const { data: products, isLoading, error } = useGetProductsQuery(undefined);
  const [selectedMenu, setSelectedMenu] = useState<string>("home");

  const [basket, setBasket] = useState<MaintItem[]>([]);

  useEffect(() => {
    if (products) {
      setBasket(products);
    }
  }, [products]);

  const handleMenuClick = (e: { key: string }) => {
    setSelectedMenu(e.key);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products.</p>;
  }

  const renderContent = () => {
    switch (selectedMenu) {
      case "home":
        return (
          <div
            style={{
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {basket.length === 0 ? (
              <Typography>No Products</Typography>
            ) : (
              basket.map((item: MaintItem) => (
                <MainCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  imageUrl={item.image}
                  category={item.category}
                  price={item.price}
                  rating={item.rating}
                />
              ))
            )}
          </div>
        );
      case "cart":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Basket />
          </div>
        );
      default:
        return <Typography>Welcome to our website!</Typography>;
    }
  };

  return (
    <Layout className="layout" style={{ minHeight: "100vh", width: "100%" }}>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          onClick={handleMenuClick}
          selectedKeys={[selectedMenu]}
          items={[
            { key: "home", label: "Home" },
            { key: "cart", label: "Cart", icon: <ShoppingCartOutlined /> },
          ]}
        />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{renderContent()}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default HomePage;
