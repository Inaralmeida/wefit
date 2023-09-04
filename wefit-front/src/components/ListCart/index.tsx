import { useCartContext } from "../../core/Context/CartContext";
import { ICartItem } from "../../core/interfaces";
import Button from "../Button";
import ItemList from "../ItemList";
import { StylesItemList } from "../ItemList/ItemList.styles";
import { StylesListCart } from "./ListCart.styles";

const ListCart = ({handleFinalizeOrder}:{handleFinalizeOrder: ()=> void}) => {
  const {myCart, handleAddItemToCart, handleRemoveItemToCart, handleRemoveProductCart, totalPriceCart, handleFormatValue} = useCartContext()

  return (
    <StylesListCart>
      <StylesItemList className="header" isHeader>
        <section>
        <div className="description">
          <p className="small-destaque"  style={{ fontSize: "14px" }} >PRODUTO</p>
        </div>
        <div className="amount">
          <p className="small-destaque"  style={{ fontSize: "14px" }} >QTD</p>
        </div>
        <div className="subtotal">
          <p className="small-destaque"  style={{ fontSize: "14px" }} >SUBTOTAL</p>
        </div>
        <div className="trash">
          
        </div>
        </section>
      </StylesItemList>
      {myCart && myCart.map((item:ICartItem)=>{
        return(
          <ItemList
          id={item.product.id}
          key={item.product.id}
          add={()=>handleAddItemToCart && handleAddItemToCart(item.product.id)}
          remove={()=>handleRemoveItemToCart && handleRemoveItemToCart(item.product.id)}
          handleDelete={()=>handleRemoveProductCart && handleRemoveProductCart(item.product.id)}
          image={item.product.image}
          title={item.product.title}
          amount={item.amount}
          price={item.product.price}
          totalValue={item.totalPrice}
          />
        )
      })}

      

      <section className="footer">
        <Button label="finalizar pedido" width="235px" onClick={handleFinalizeOrder} />

        <div>
          <small className="small-destaque" >TOTAL</small>
          <p className="text-default" style={{ fontSize: "24px" }}>{handleFormatValue && handleFormatValue(totalPriceCart ? totalPriceCart : 0)}</p>
        </div>
      </section>
    </StylesListCart>
  );
};

export default ListCart;


