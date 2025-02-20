import ProductCard from "./cards/ProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

interface ProductProps {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  price: number;
  rating: { rate: number; count: number };
}

const Product: React.FC<ProductProps> = ({
  id,
  title,
  category,
  image,
  description,
  price,
  rating,
}) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const product = {
      id,
      title,
      image,
      category,
      price,
      rating,
      count: 1,
    };
    dispatch(addToCart(product));
  };

  return (
    <ProductCard
      title={title}
      category={category}
      description={description}
      price={price}
      imageUrl={image}
      onAddToCart={handleAddToCart}
      rating={rating}
    />
  );
};

export default Product;
