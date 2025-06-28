import Tag from '../Tag'
import * as S from './styles'

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
    <S.CardsContainer>
      <S.Image src={image} alt={title} />
      <S.Infos>
        <S.InfoTop>
          <h3>{title}</h3>
          <S.InfoTags>
            {highlight && <Tag>Destaque da semana</Tag>}
            <Tag>{category}</Tag>
          </S.InfoTags>
          <S.Evaluation>
            <S.Nota>{rating}</S.Nota>
            <S.Icon className="fa-solid fa-star" />
          </S.Evaluation>
        </S.InfoTop>
        <S.Description>{getDescricao(description)}</S.Description>

        <Button
          type="link"
          to={`/restaurant/${id}`}
          title="Click para mais informações"
        >
          Saiba mais
        </Button>
      </S.Infos>
    </S.CardsContainer>
  )
}

export default Cards
