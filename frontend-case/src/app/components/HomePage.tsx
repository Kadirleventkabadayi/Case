import { useState, useEffect } from "react";
import { useGetProductsQuery } from "../services/api";
import MainCard from "./cards/MainCard";
import { Typography } from "antd";
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

  const [basket, setBasket] = useState<MaintItem[]>([]);

  useEffect(() => {
    if (products) {
      setBasket(products);
    }
  }, [products]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products.</p>;
  }

  return (
    <div className="layout" style={{ minHeight: "100vh", width: "100%" }}>
      <div style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
