import { Foods } from '../../pages/Home'
import CardsRest from '../CardsRest'
import Cards from '../Cards'
import { Container, List, ListContainer } from './styles'

type Props = {
  foods: Foods[]
  variant: 'rest' | 'default'
}

const CardsList = ({ foods, variant }: Props) => {
  const renderCard = (food: Foods) => {
    if (variant === 'rest') {
      return (
        <CardsRest
          key={food.id}
          title={food.titulo}
          image={food.capa}
          description={food.descricao}
        />
      )
    }

    return (
      <Cards
        key={food.id}
        title={food.titulo}
        category={food.tipo}
        description={food.descricao}
        rating={food.avaliacao}
        highlight={food.destacado}
        image={food.capa}
      />
    )
  }

  return (
    <Container>
      <div className="container">
        {variant === 'rest' ? (
          <ListContainer>{foods.map(renderCard)}</ListContainer>
        ) : (
          <List>{foods.map(renderCard)}</List>
        )}
      </div>
    </Container>
  )
}

export default CardsList
