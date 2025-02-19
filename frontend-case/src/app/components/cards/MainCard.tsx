import { Button, Card, Rate, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

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
    };
    dispatch(addToCart(product));
  };

  return (
    <Card
      style={{
        width: 300,
        height: 350,
        margin: 24,
      }}
      styles={{
        body: {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
      cover={
        <img
          alt="example"
          src={imageUrl}
          style={{ width: 300, height: 200, objectFit: "contain", padding: 16 }}
        />
      }
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
      <Typography.Text
        style={{
          width: 250,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          textAlign: "center",
        }}
      >
        {title}
      </Typography.Text>
      <Typography.Text>${price.toFixed(2)}</Typography.Text>
      <Rate disabled allowHalf defaultValue={rating.rate || 0} />
    </Card>
  );
};

export default MainCard;
