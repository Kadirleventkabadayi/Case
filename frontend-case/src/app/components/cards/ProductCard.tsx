import { Card, Button, Typography, Rate } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  onAddToCart: () => void;
  category: string;
  rate: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  imageUrl,
  onAddToCart,
  category,
  rate,
}) => {
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: 16,
      }}
      styles={{
        body: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
      cover={
        <img
          alt={title}
          src={imageUrl}
          style={{ width: 400, height: 400, objectFit: "contain" }}
        />
      }
    >
      <Card.Meta title={title} description={description} />
      <Typography>{category}</Typography>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography style={{ fontWeight: "bold" }}>
          ${price.toFixed(2)}
        </Typography>
        <Rate disabled allowHalf defaultValue={rate || 0} />
      </div>
      <Button
        key="add-to-cart"
        type="primary"
        icon={<ShoppingCartOutlined />}
        onClick={onAddToCart}
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
