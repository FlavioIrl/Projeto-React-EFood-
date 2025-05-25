import Button from '../Button'
import { Image, CardsRestContainer, Title, Description } from './styles'

type Props = {
  description: string
  image: string
  title: string
}

const CardsRest = ({ description, image, title }: Props) => (
  <CardsRestContainer>
    <Image src={image} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button type={'button'} title={'Botao de adição do carrinho'}>
      Adicionar ao carrinho
    </Button>
  </CardsRestContainer>
)

export default CardsRest
