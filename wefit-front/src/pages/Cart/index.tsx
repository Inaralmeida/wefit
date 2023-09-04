import { useEffect, useState } from "react"
import BannerStatus from "../../components/BannerStatus"
import ListCart from "../../components/ListCart"
import { useCartContext } from "../../core/Context/CartContext"
import { StylesCartContainer } from "./cart.page.styles"

const Cart = () => {
  const {totalItensInCart, handleResetCart} = useCartContext()

  const [status, setStatus] = useState<'empty' | 'inProgress' | 'purchase'>()

  const handleFinalizeOrder = () =>{
    setStatus('purchase')
    handleResetCart && handleResetCart()
  }

  useEffect(()=>{
    if(totalItensInCart === 0  && status !== 'purchase'){
      setStatus('empty')
    }else if (totalItensInCart && totalItensInCart > 0 ){
      setStatus('inProgress')
    }
  },[totalItensInCart, setStatus])

  return (
    <StylesCartContainer >
      {status === 'empty' && <BannerStatus status="empty_cart"/> }
      {status === 'purchase' && <BannerStatus status="purchase_made"/> }
      {status === 'inProgress' && <ListCart handleFinalizeOrder={handleFinalizeOrder}/>}
    </StylesCartContainer>
  )
}

export default Cart