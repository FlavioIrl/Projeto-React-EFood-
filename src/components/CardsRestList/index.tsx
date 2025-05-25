import Food from '../../models/Food'
import CardsRest from '../CardsRest'

export type Props = {
  foods: Food[]
}

const CardsRestList = ({ foods }: Props) => (
  <div className="container">
    {foods.map((food) => (
      <CardsRest
        key={food.id}
        title={food.title}
        image={food.image}
        description={food.description}
      />
    ))}
  </div>
)

export default CardsRestList
