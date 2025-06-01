import CardsRest from '../CardsRest'
import { Container, ListContainer } from './styles'

type CardapioItem = {
  foto: string
  nome: string
  preco: number
  descricao: string
  porcao?: string
}

type Props = {
  foods: CardapioItem[]
}

const MenuList = ({ foods }: Props) => {
  return (
    <Container>
      <div className="container">
        <ListContainer>
          {foods.map((food) => (
            <CardsRest
              key={food.nome}
              nome={food.nome}
              foto={food.foto}
              descricao={food.descricao}
              preco={food.preco}
              porcao={food.porcao}
            />
          ))}
        </ListContainer>
      </div>
    </Container>
  )
}

export default MenuList
