import Banner from '../../components/Banner'
import CardsList from '../../components/CardsList'
import LaDolce from '../../assets/images/LaDolceVita.png'
import Hioki from '../../assets/images/HiokiSushi.png'
import Food from '../../models/Food'

const promocoes: Food[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    category: 'Japonesa',
    highlight: 'Destaque da semana',
    image: Hioki,
    rating: 4.9
  },
  {
    id: 2,
    title: 'La Dolce Vita',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Italiana',
    image: LaDolce,
    rating: 4.6
  },
  {
    id: 3,
    title: 'La Dolce Vita',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Italiana',
    image: LaDolce,
    rating: 4.6
  },
  {
    id: 4,
    title: 'La Dolce Vita',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Italiana',
    image: LaDolce,
    rating: 4.6
  },
  {
    id: 5,
    title: 'La Dolce Vita',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Italiana',
    image: LaDolce,
    rating: 4.6
  },
  {
    id: 6,
    title: 'La Dolce Vita',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Italiana',
    image: LaDolce,
    rating: 4.6
  }
]

const Home = () => (
  <>
    <Banner />
    <CardsList foods={promocoes} />
  </>
)

export default Home
