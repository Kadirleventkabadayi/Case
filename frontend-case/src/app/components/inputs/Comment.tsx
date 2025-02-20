import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

interface CommentProps {
  author: string;
  content: string;
  datetime: string;
}

const Comment: React.FC<CommentProps> = ({ author, content, datetime }) => {
  return (
    <Card style={{ marginBottom: 16 }}>
      <Card.Meta
        avatar={<Avatar icon={<UserOutlined />} />}
        title={author}
        description={new Date(datetime).toLocaleDateString()}
      />
      <div style={{ marginTop: 16 }}>{content}</div>
    </Card>
  );
};

export default Comment;
