import { Button } from "antd";

interface FormBtnProps {
  onClick: () => void;
  label: string;
  styles?: React.CSSProperties;
  isDisabled?: boolean;
}

const FormBtn: React.FC<FormBtnProps> = ({
  onClick,
  label,
  styles,
  isDisabled,
}) => {
  return (
    <Button
      disabled={isDisabled}
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
