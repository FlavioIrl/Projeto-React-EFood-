import { Foods } from '../../pages/Home'
import Cards from '../Cards'
import { Container, List } from './styles'

type Props = {
  foods: Foods[]
}

const CardsList = ({ foods }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {foods.map((restaurant) => (
            <Cards
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.titulo}
              category={restaurant.tipo}
              description={restaurant.descricao}
              rating={restaurant.avaliacao}
              highlight={restaurant.destacado}
              image={restaurant.capa}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default CardsList
