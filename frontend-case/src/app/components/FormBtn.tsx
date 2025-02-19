import { Button } from "antd";

interface FormBtnProps {
  onClick: () => void;
  label: string;
}

const FormBtn: React.FC<FormBtnProps> = ({ onClick, label }) => {
  return (
    <Button type="primary" block onClick={onClick}>
      {label}
    </Button>
  );
};

export default FormBtn;
