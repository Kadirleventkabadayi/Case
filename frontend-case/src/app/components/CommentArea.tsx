import React, { useState } from "react";
import { Input, Button, List, Form } from "antd";
import Comment from "./inputs/Comment";

const { TextArea } = Input;

interface CommentItem {
  author: string;
  content: string;
  datetime: string;
}

const CommentArea: React.FC = () => {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = () => {
    if (!comment) return;
    setComments([
      ...comments,
      { author: "User", content: comment, datetime: new Date().toISOString() },
    ]);
    setComment("");
  };

  return (
    <div>
      <Form.Item>
        <TextArea
          style={{ height: 120, resize: "none" }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
        />
      </Form.Item>
      <Form.Item
        style={{
          position: "relative",
          textAlign: "end",
          top: -60,
          paddingInlineEnd: 8,
        }}
      >
        <Button htmlType="submit" onClick={handleSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
      <List
        dataSource={comments}
        itemLayout="horizontal"
        renderItem={(props) => (
          <li>
            <Comment
              author={props.author}
              content={props.content}
              datetime={props.datetime}
            />
          </li>
        )}
      />
    </div>
  );
};

export default CommentArea;
