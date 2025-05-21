import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { Title, Image, Logo } from './styles'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${fundo})` }}>
    <div>
      <Logo src={logo} />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </Image>
)

export default Banner
