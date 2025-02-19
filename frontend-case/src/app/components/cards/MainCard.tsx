import { Button, Card, Rate, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
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

  return (
    <Card
      className={styles.cardContainer}
      styles={{
        body: {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
      cover={<img alt="example" src={imageUrl} className={styles.cardImage} />}
      actions={[
        <Button
          key="add-to-cart"
          type="primary"
          icon={<ShoppingCartOutlined />}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>,
      ]}
    >
      <Card.Meta title={category} />
      <Typography.Text className={styles.cardTitle}>{title}</Typography.Text>
      <Typography.Text>${price.toFixed(2)}</Typography.Text>
      <Rate disabled allowHalf defaultValue={rating.rate || 0} />
    </Card>
  );
};

export default MainCard;
