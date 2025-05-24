import Cards from '../Cards'
import { Container, List } from './styles'
import Food from '../../models/Food'

export type Props = {
  foods: Food[]
}

const CardsList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Cards
            key={food.id}
            title={food.title}
            category={food.category}
            description={food.description}
            rating={food.rating}
            highlight={food.highlight}
            image={food.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default CardsList
