import { DeleteOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";

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
  return (
    <Card
      style={{ width: 300, height: 450, margin: "16px" }}
      cover={
        <img
          alt="example"
          src={image}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "contain",
          }}
        />
      }
      actions={[
        <Button
          key="remove-from-cart"
          type="primary"
          icon={<DeleteOutlined />}
          onClick={onRemove}
        >
          Remove
        </Button>,
      ]}
    >
      <Card.Meta
        title={
          <div
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </div>
        }
        description={
          <div
            style={{
              height: "50px",
              width: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </div>
        }
      />
      <div style={{ marginTop: "16px", fontWeight: "bold" }}>
        ${price.toFixed(2)}
      </div>
    </Card>
  );
};

export default BasketCard;
