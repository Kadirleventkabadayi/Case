"use client";

import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Product from "@/app/components/Product";
import CommentArea from "@/app/components/CommentArea";

interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  price: number;
  rating: { rate: number; count: number };
}

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();
        setProduct(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={{ backgroundColor: "white", padding: 16, minHeight: "100vh" }}>
      <Product
        id={product.id}
        title={product.title}
        category={product.category}
        image={product.image}
        description={product.description}
        price={product.price}
        rating={product.rating}
      />
      <CommentArea />
    </div>
  );
};

export default ProductPage;
