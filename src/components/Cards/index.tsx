import Tag from '../Tag'
import {
  Image,
  Icon,
  Evaluation,
  InfoTop,
  CardsContainer,
  Infos,
  Description,
  Nota,
  InfoTags
} from './styles'

import Button from '../Button'

type Props = {
  category: string
  description: string
  image: string
  highlight?: boolean
  rating: number
  title: string
}

const Cards = ({
  category,
  description,
  highlight,
  title,
  image,
  rating
}: Props) => (
  <CardsContainer>
    <Image src={image} alt={title} />
    <Infos>
      <InfoTop>
        <h3>{title}</h3>
        <InfoTags>
          {highlight && <Tag>Destaque da semana</Tag>}
          <Tag>{category}</Tag>
        </InfoTags>
        <Evaluation>
          <Nota>{rating}</Nota>
          <Icon className="fa-solid fa-star" />
        </Evaluation>
      </InfoTop>
      <Description>{description}</Description>

      <Button type="link" to="/restaurant" title="Click para mais informações">
        Saiba mais
      </Button>
    </Infos>
  </CardsContainer>
)

export default Cards
