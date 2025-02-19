import { Card, Typography } from "antd";

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
      style={{
        width: 600,
        height: 200,
        margin: "16px",
        display: "flex",
        cursor: "default",
      }}
      styles={{
        body: {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        },
      }}
      cover={
        <img
          alt="example"
          src={image}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "contain",
            padding: "16px",
          }}
        />
      }
    >
      <Card.Meta
        style={{ width: "100%" }}
        title={
          <div
            style={{
              width: "14vw",
              whiteSpace: "nowrap",
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
              width: "14vw",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </div>
        }
      />
      <div
        style={{
          minWidth: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginTop: "16px", fontWeight: "bold" }}>
          ${price.toFixed(2)}
        </div>
        <Text
          key="remove-from-cart"
          onClick={onRemove}
          underline
          style={{ cursor: "pointer" }}
        >
          Remove
        </Text>
      </div>
    </Card>
  );
};

export default BasketCard;
