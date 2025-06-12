import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { open } from '../../store/reducers/cart'

import { Background, ButtonCarrinho, Container } from './styles'
import Logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import Button from '../Button'

const BannerRestaurant = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Background
      style={{ backgroundImage: `url(${fundo})`, objectFit: 'cover' }}
    >
      <Container>
        <Button type="link" to="/" title="Botão para voltar aons restaurantes">
          Restaurantes
        </Button>
        <img src={Logo} alt="papel de fundo" />
        <ButtonCarrinho onClick={openCart}>
          {items.length} Produto(s) no carrinho
        </ButtonCarrinho>
      </Container>
    </Background>
  )
}

export default BannerRestaurant
