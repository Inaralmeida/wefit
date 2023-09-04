import { Link } from 'react-router-dom'
import iconShopping from '../../assets/icon-shopping.png'
import { StylesHeader } from './header.styles'
import { useCartContext } from '../../core/Context/CartContext'

const Header = () => {
  const {totalItensInCart} = useCartContext()
  return (
    <StylesHeader className='content'>
      <Link to='/'>
      <h1>WeMovies</h1>
      </Link>

      <Link to='/carrinho' className='carrinho'>
        <section>
          <p>Meu Carrinho</p>
          <small>{totalItensInCart} itens</small>
        </section>

        <img src={iconShopping} alt="Icon shopping" />
      </Link>
    </StylesHeader>
  )
}

export default Header