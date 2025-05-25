import { Image, CardsRestContainer } from './styles'

type Props = {
  description: string
  image: string
  title: string
}

const CardsRest = ({ description, image, title }: Props) => (
  <CardsRestContainer>
    <Image src={image} />
    <h1>{title}</h1>
    <p>{description}</p>
  </CardsRestContainer>
)

export default CardsRest
