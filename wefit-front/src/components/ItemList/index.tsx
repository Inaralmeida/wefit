import { StylesItemList } from "./ItemList.styles";
import StepperInput from "../StepperInput";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCartContext } from "../../core/Context/CartContext";

interface IItemList {
  id: number;
  add: () => void;
  handleDelete: () => void;
  image?: string;
  title?: string;
  price: number;
  totalValue: number;
  remove: () => void;
  amount: number;
}

const ItemList = ({
  add,
  remove,
  amount,
  image,
  title,
  price,
  totalValue,
  handleDelete,
}: IItemList) => {

  const {handleFormatValue} = useCartContext()
  return (
    <StylesItemList>
      <img src={image} alt={title} />

      <section>
        <div className="description">
          <p className="text-default">{title}</p>
          <p className="text-default" style={{ fontSize: "16px" }}>
            {handleFormatValue && handleFormatValue(price)}
          </p>
        </div>

        <div className="amount">
          <StepperInput add={add} remove={remove} defaulValue={amount} />
        </div>

        <div className="subtotal">
          <small className="small-destaque">SUBTOTAL</small>
          <p className="text-default" style={{ fontSize: "16px" }}>
            {handleFormatValue && handleFormatValue(totalValue)}
          </p>
        </div>

        <div className="trash">
          <DeleteIcon
            color="primary"
            fontSize="small"
            onClick={handleDelete}
            cursor="pointer"
          />
        </div>
      </section>
    </StylesItemList>
  );
};

export default ItemList;
