import { Button } from "antd";

interface FormBtnProps {
  onClick: () => void;
  label: string;
  styles?: React.CSSProperties;
}

const FormBtn: React.FC<FormBtnProps> = ({ onClick, label, styles }) => {
  return (
    <Button
      type="primary"
      block
      onClick={onClick}
      style={{ margin: "16px", ...styles }}
    >
      {label}
    </Button>
  );
};

export default FormBtn;
