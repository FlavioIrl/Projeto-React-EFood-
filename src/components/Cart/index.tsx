import { RootReducer } from '../../store'
import { close, remove, CartItem } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'

import { SideBar, CartContainer, CartItems, Prices, Overlay } from './styles'

import Button from '../Button'
import { formataPreco, getTotalPrice } from '../../utils'

type Props = {
  onContinue: () => void
}
const Cart = ({ onContinue }: Props) => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItems = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItems key={item.id}>
                  <img src={item.foto} />
                  <div>
                    <h2>{item.nome}</h2>
                    <p>{formataPreco(item.preco)}</p>
                    <button
                      onClick={() => removeItems(item.id)}
                      type="button"
                    />
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
              onClick={() => {
                onContinue()
                closeCart()
              }}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <>
            <p className="empty-text">
              O Carrinho está vazio, adicione pelo menos um produto para
              continuar com a compra
            </p>
          </>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
