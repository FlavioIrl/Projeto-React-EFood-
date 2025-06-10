import Pizza from '../../assets/images/PizzaMarguerita.png'
import Button from '../Button'
import { SideBar, CartContainer, CartItem, Prices, Overlay } from './styles'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <SideBar>
        <ul>
          <CartItem>
            <img src={Pizza} />
            <div>
              <h2>Pizza Magarita</h2>
              <p>R$ 150</p>
              <button type="button" />
            </div>
          </CartItem>
          <CartItem>
            <img src={Pizza} />
            <div>
              <h2>Pizza Magarita</h2>
              <p>R$ 150</p>
              <button type="button" />
            </div>
          </CartItem>
          <CartItem>
            <img src={Pizza} />
            <div>
              <h2>Pizza Magarita</h2>
              <p>R$ 150</p>
              <button type="button" />
            </div>
          </CartItem>
        </ul>
        <Prices>
          <p>Valor total</p>
          <p>R$ 150,70</p>
        </Prices>
        <Button type="button" title={'Clicke e continue o pagamento'}>
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
