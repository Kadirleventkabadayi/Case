import ProductCard from "./cards/ProductCard";

interface ProductProps {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  price: number;
  rate: number;
}

const Product: React.FC<ProductProps> = ({
  id,
  title,
  category,
  image,
  description,
  price,
  rate,
}) => {
  const addToCart = () => {
    console.log(`Product ${id} added to cart`);
  };

  return (
    <ProductCard
      title={title}
      category={category}
      description={description}
      price={price}
      imageUrl={image}
      onAddToCart={addToCart}
      rate={rate}
    />
  );
};

export default Product;
