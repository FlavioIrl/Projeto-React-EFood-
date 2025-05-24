import CardsList from '../../components/CardsList'
import Hioki from '../../assets/images/HiokiSushi.png'
import Food from '../../models/Food'
import HeaderRestaurant from '../../components/HeaderRestaurant'

const dishes: Food[] = [
  {
    id: 1,
    title: 'Hioki Ssasaushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    category: 'Japonesa',
    highlight: 'Destaque da semana',
    image: Hioki,
    rating: 4.9
  }
]

const Restaurant = () => (
  <>
    <HeaderRestaurant
      title={dishes[0].title}
      category={dishes[0].category}
      image={dishes[0].image}
    />
    <CardsList foods={dishes} />
  </>
)

export default Restaurant
