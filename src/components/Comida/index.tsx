import Hioki from '../../assets/images/HiokiSushi.png'
import { Image } from './styles'

const Comida = () => (
  <div>
    <Image src={Hioki} alt="HiokiSushi" />
    <h3>Hioki Suchi</h3>
    <p>
      A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
      Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
      no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
      inesquecível. Peça já!
    </p>
  </div>
)

export default Comida
