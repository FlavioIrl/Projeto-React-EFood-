import Cards from '../Cards'
import { Container, List } from './styles'

const CardsList = () => (
  <Container>
    <div className="container">
      <List>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </List>
    </div>
  </Container>
)

export default CardsList
