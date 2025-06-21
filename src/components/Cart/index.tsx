import { RootReducer } from '../../store'
import { close, remove, CartItem } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'

import { SideBar, CartContainer, CartItems, Prices, Overlay } from './styles'

import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  console.log('Carrinho aberto?', isOpen)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = (items: CartItem[]) => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const removeItems = (id: number) => {
    dispatch(remove(id))
  }

  const goToChekout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItems key={item.id}>
              <img src={item.foto} />
              <div>
                <h2>{item.nome}</h2>
                <p>{formataPreco(item.preco)}</p>
                <button onClick={() => removeItems(item.id)} type="button" />
              </div>
            </CartItems>
          ))}
        </ul>
        <Prices>
          <p>Valor total</p>
          <p>
            {formataPreco(getTotalPrice(items))}
            {''}
          </p>
        </Prices>
        <Button
          type="button"
          title={'Clicke e continue o pagamento'}
          onClick={goToChekout}
        >
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
