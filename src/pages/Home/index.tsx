import Banner from '../../components/Banner'
import CardsList from '../../components/CardsList'
import { useGetRestaurantQuery } from '../../services/api'

export type Foods = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao?: string
  }[]
}

const Home = () => {
  const { data: restaurant } = useGetRestaurantQuery()

  if (!restaurant) return <h1>Carregando...</h1>

  const filtroDestaque = restaurant.filter((rest) => rest.destacado)

  return (
    <>
      <Banner />
      <CardsList foods={filtroDestaque} />
      <CardsList foods={restaurant} />
    </>
  )
}

export default Home
