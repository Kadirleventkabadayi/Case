import { Button, Card, Rate, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { useRouter } from "next/navigation"; // useRouter import edildi
import styles from "../../styles/MainCard.module.css";

interface MainCardProps {
  title: string;
  imageUrl: string;
  category: string;
  price: number;
  id: number;
  rating: { rate: number; count: number };
}

const MainCard: React.FC<MainCardProps> = ({
  title,
  imageUrl,
  category,
  price,
  id,
  rating,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    const product = {
      id,
      title,
      image: imageUrl,
      category,
      price,
      rating,
      count: 1,
    };
    dispatch(addToCart(product));
  };

  const handleCardClick = () => {
    router.push(`/product/${id}`);
  };

  return (
    <Card
      className={styles.cardContainer}
      hoverable
      onClick={handleCardClick}
      styles={{
        body: {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
        },
      }}
      cover={<img alt="example" src={imageUrl} className={styles.cardImage} />}
    >
      <Card.Meta title={category} />
      <Typography.Text className={styles.cardTitle}>{title}</Typography.Text>
      <Typography.Text>${price.toFixed(2)}</Typography.Text>
      <Rate disabled allowHalf defaultValue={rating.rate || 0} />
      <Button
        key="add-to-cart"
        type="primary"
        icon={<ShoppingCartOutlined />}
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default MainCard;
