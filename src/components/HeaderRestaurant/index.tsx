import BannerRestaurant from '../BannerRestaurant'
import { ImageHeader, Title, Category } from './styles'
import { Foods } from '../../pages/Home'

type Props = {
  foods: Foods
}

const HeaderRestaurant = ({ foods }: Props) => (
  <>
    <BannerRestaurant />
    <ImageHeader
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${foods.capa})`
      }}
    >
      <div className="container">
        <Category>{foods.tipo}</Category>
        <Title>{foods.titulo}</Title>
      </div>
    </ImageHeader>
  </>
)

export default HeaderRestaurant
