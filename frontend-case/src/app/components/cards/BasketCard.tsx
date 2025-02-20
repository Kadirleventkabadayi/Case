import { Card, Typography } from "antd";
import styles from "../../styles/BasketCard.module.css";

interface BasketCardProps {
  title: string;
  count: number;
  price: number;
  image: string;
  onRemove: () => void;
  onPush: () => void;
}

const BasketCard: React.FC<BasketCardProps> = ({
  title,
  count,
  price,
  onRemove,
  onPush,
  image,
}) => {
  return (
    <Card
      hoverable
      className={styles.cardContainer}
      cover={
        <img
          alt="example"
          src={image}
          className={styles.cardImage}
          onClick={onPush}
        />
      }
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
          <div className={styles.cardDescription}>Amount - {count}</div>
        }
      />
      <div className={styles.cardInfo}>
        <div className={styles.cardPrice}>${price.toFixed(2)}</div>
        <Typography.Text
          key="remove-from-cart"
          onClick={onRemove}
          className={styles.removeText}
        >
          Remove
        </Typography.Text>
      </div>
    </Card>
  );
};

export default BasketCard;
