import iconAddCart from "../../assets/icon-add-cart.png";
import { StylesButton } from "./Button.styles";

interface IButtonProps {
  onClick: () => void;
  isActive?: boolean;
  textActive?: string;
  amountItems?: number;
  startIcon?: boolean;
  label: string;
  width?: string;
  center?: boolean;
}

const Button = ({
  onClick,
  isActive,
  textActive,
  amountItems,
  startIcon,
  label,
  width,
  center,
}: IButtonProps) => {
  return (
    <StylesButton
      className={isActive ? "active" : ""}
      onClick={onClick}
      width={width ? width : "100%"}
      center={center ? center : false}
    >
      {startIcon && (
        <div className="content-icon">
          <img src={iconAddCart} alt="icon add cart" />
          <small>{amountItems}</small>
        </div>
      )}
      <p>{isActive ? textActive : label}</p>
    </StylesButton>
  );
};

export default Button;
