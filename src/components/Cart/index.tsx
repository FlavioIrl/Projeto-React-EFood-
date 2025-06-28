import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

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
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItems key={item.id}>
                  <img src={item.foto} />
                  <div>
                    <h2>{item.nome}</h2>
                    <p>{formataPreco(item.preco)}</p>
                    <button
                      onClick={() => removeItems(item.id)}
                      type="button"
                    />
                  </div>
                </S.CartItems>
              ))}
            </ul>
            <S.Prices>
              <p>Valor total</p>
              <p>
                {formataPreco(getTotalPrice(items))}
                {''}
              </p>
            </S.Prices>
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
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
