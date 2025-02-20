import { Card, Button, Typography, Rate } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import styles from "../../styles/Product.module.css";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  onAddToCart: () => void;
  category: string;
  rating: { rate: number; count: number };
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  imageUrl,
  onAddToCart,
  category,
  rating,
}) => {
  return (
    <Card
      className={styles.cardContainer}
      styles={{
        body: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
      cover={<img alt={title} src={imageUrl} className={styles.cardImage} />}
    >
      <Card.Meta title={title} description={description} />
      <Typography>{category}</Typography>
      <div className={styles.cardBodyInner}>
        <Typography style={{ fontWeight: "bold" }}>
          ${price.toFixed(2)}
        </Typography>
        <Rate disabled allowHalf defaultValue={rating.rate || 0} />
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
