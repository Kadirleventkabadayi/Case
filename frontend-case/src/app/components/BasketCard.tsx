import { Card, Typography } from "antd";
import styles from "../styles/BasketCard.module.css";

interface BasketCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  onRemove: () => void;
}

const BasketCard: React.FC<BasketCardProps> = ({
  title,
  description,
  price,
  onRemove,
  image,
}) => {
  const { Text } = Typography;

  return (
    <Card
      hoverable
      className={styles.cardContainer}
      cover={<img alt="example" src={image} className={styles.cardImage} />}
      styles={{
        body: {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        },
      }}
    >
      <Card.Meta
        style={{ width: "100%" }}
        title={<div className={styles.cardTitle}>{title}</div>}
        description={
          <div className={styles.cardDescription}>{description}</div>
        }
      />
      <div className={styles.cardInfo}>
        <div className={styles.cardPrice}>${price.toFixed(2)}</div>
        <Text
          key="remove-from-cart"
          onClick={onRemove}
          className={styles.removeText}
        >
          Remove
        </Text>
      </div>
    </Card>
  );
};

export default BasketCard;
