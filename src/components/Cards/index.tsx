import Hioki from '../../assets/images/HiokiSushi.png'

import {
  Image,
  Icon,
  Evaluation,
  InfoTop,
  CardsContainer,
  Infos
} from './styles'

const Cards = () => (
  <CardsContainer>
    <Image src={Hioki} alt="HiokiSushi" />
    <Infos>
      <InfoTop>
        <h3>Hioki Suchi</h3>
        <Evaluation>
          <p>4.9</p>
          <Icon className="fa-solid fa-star" />
        </Evaluation>
      </InfoTop>
      <p>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </p>
      <button>Saiba mais</button>
    </Infos>
  </CardsContainer>
)

export default Cards
