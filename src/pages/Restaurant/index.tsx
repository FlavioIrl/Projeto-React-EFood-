import LaDolce from '../../assets/images/LaDolceVita.png'
import Pizza from '../../assets/images/PizzaMarguerita.png'
import Food from '../../models/Food'
import HeaderRestaurant from '../../components/HeaderRestaurant'
import CardsList from '../../components/CardsList'

const banner: Food[] = [
  {
    id: 5,
    title: 'La Dolce Vita',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Italiana',
    image: LaDolce,
    rating: 4.6
  }
]

const dishes: Food[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    category: 'Italiana',
    image: Pizza,
    rating: 4.9
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    category: 'Japonesa',
    image: Pizza,
    rating: 4.9
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    category: 'Japonesa',
    image: Pizza,
    rating: 4.9
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    category: 'Japonesa',
    image: Pizza,
    rating: 4.9
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    category: 'Japonesa',
    image: Pizza,
    rating: 4.9
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    category: 'Japonesa',
    image: Pizza,
    rating: 4.9
  }
]

const Restaurant = () => (
  <>
    <HeaderRestaurant
      title={banner[0].title}
      category={banner[0].category}
      image={banner[0].image}
    />
    <CardsList foods={dishes} variant="rest" />
  </>
)

export default Restaurant
