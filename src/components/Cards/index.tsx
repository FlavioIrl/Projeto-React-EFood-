import Hioki from '../../assets/images/HiokiSushi.png'

import {
  Image,
  Icon,
  Evaluation,
  InfoTop,
  CardsContainer,
  Infos,
  Description,
  ButtonCard,
  Nota
} from './styles'

const Cards = () => (
  <CardsContainer>
    <Image src={Hioki} alt="HiokiSushi" />
    <Infos>
      <InfoTop>
        <h3>Hioki Suchi</h3>
        <Evaluation>
          <Nota>4.9</Nota>
          <Icon className="fa-solid fa-star" />
        </Evaluation>
      </InfoTop>
      <Description>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. <br />
        Experimente o Japão sem sair do lar com nosso delivery!
      </Description>
      <ButtonCard>Saiba mais</ButtonCard>
    </Infos>
  </CardsContainer>
)

export default Cards
