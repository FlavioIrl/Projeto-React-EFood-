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
  id: number
}

const Cards = ({
  category,
  description,
  highlight,
  title,
  image,
  rating,
  id
}: Props) => {
  const getDescricao = (description: string) => {
    if (description.length > 250) {
      return description.slice(0, 250) + '...'
    }
    return description
  }
  console.log('Comprimento descrição:', description.length)
  return (
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
        <Description>{getDescricao(description)}</Description>

        <Button
          type="link"
          to={`/restaurant/${id}`}
          title="Click para mais informações"
        >
          Saiba mais
        </Button>
      </Infos>
    </CardsContainer>
  )
}

export default Cards
