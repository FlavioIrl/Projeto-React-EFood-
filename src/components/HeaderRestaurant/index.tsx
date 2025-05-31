import BannerRestaurant from '../BannerRestaurant'
import { ImageHeader, Title, Category } from './styles'
import { Foods } from '../../pages/Home'

type Props = {
  restaurant: Foods
}

const HeaderRestaurant = ({ restaurant }: Props) => (
  <>
    <BannerRestaurant />
    <ImageHeader
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${restaurant.capa})`
      }}
    >
      <div className="container">
        <Category>{restaurant.tipo}</Category>
        <Title>{restaurant.titulo}</Title>
      </div>
    </ImageHeader>
  </>
)

export default HeaderRestaurant
