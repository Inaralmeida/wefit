import { useCartContext } from '../../core/Context/CartContext';
import Button from '../Button'
import { StylesCardProducts } from './CardProduct.styles';

interface ICardproduct {
  id: number;
  title: string;
  price: number;
  image: string;
  addCart: ()=> void;
  amount: number
  isActive:boolean
}

const CardProduct = ({image, title, price, addCart, amount, isActive}:ICardproduct) => {
  const {handleFormatValue} = useCartContext()
  return (
    <StylesCardProducts >
      <img src={image} alt={title} />
      <small>{title}</small>
      <p>{handleFormatValue && handleFormatValue(price)}</p>
      <Button
        label='adicionar ao carrinho'
        onClick={addCart}
        amountItems={amount}
        isActive={isActive}
        startIcon
        textActive='item adicionado'

      />
    </StylesCardProducts>
  )
}

export default CardProduct