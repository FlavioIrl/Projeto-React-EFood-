import { Background, Carrinho, Container } from './styles'
import Logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import Button from '../Button'

const BannerRestaurant = () => (
  <Background style={{ backgroundImage: `url(${fundo})`, objectFit: 'cover' }}>
    <Container>
      <Button type="link" to="/" title="Botão para voltar aons restaurantes">
        Restaurantes
      </Button>
      <img src={Logo} alt="papel de fundo" />
      <Carrinho>0 Produto(s) no carrinho</Carrinho>
    </Container>
  </Background>
)

export default BannerRestaurant
