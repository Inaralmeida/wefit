import { useNavigate } from 'react-router-dom'
import emptyCart from '../../assets/empty_cart.png'
import purchaseMade from '../../assets/purchase_made.png'
import Button from '../Button'
import { StylesBannerStatus } from './BannerStatus.styles'


interface IInfosBanner{
  purchase_made: {
    title: 'Compra realizada com sucesso!',
    img: typeof purchaseMade
  },
  empty_cart: {
    title: 'Parece que não há nada por aqui :(',
    img: typeof emptyCart
  },
}

interface IBannerStatus{
  status:'empty_cart' | 'purchase_made'
}

const BannerStatus = ({status}:IBannerStatus) => {

  const navigate = useNavigate()

  const infos: IInfosBanner = {
    purchase_made: {
      title: 'Compra realizada com sucesso!',
      img: purchaseMade
    },
    empty_cart: {
      title: 'Parece que não há nada por aqui :(',
      img: emptyCart
    },
  };
  return (
    <StylesBannerStatus bg={infos[status].img}>
      <p className='text-default' style={{fontSize: '20px'}}>{infos[status].title}</p>
      <img src={infos[status].img}alt={infos[status].title} />

      <Button label='voltar'
      center
      onClick={()=> navigate('/')}
      width='180px'/>
    </StylesBannerStatus>
  )
}

export default BannerStatus