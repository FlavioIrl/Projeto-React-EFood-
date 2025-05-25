import Food from '../../models/Food'
import CardsRest from '../CardsRest'
import Cards from '../Cards'
import { Container, List, ListContainer } from './styles'

type Props = {
  foods: Food[]
  variant: 'rest' | 'default'
}

const CardsList = ({ foods, variant }: Props) => {
  const renderCard = (food: Food) => {
    if (variant === 'rest') {
      return (
        <CardsRest
          key={food.id}
          title={food.title}
          image={food.image}
          description={food.description}
        />
      )
    }

    return (
      <Cards
        key={food.id}
        title={food.title}
        category={food.category}
        description={food.description}
        rating={food.rating}
        highlight={food.highlight}
        image={food.image}
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
