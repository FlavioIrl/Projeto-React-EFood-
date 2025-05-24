import BannerRestaurant from '../BannerRestaurant'
import { ImageHeader, Title, Category } from './styles'
type Props = {
  category: string
  image: string
  title: string
}

const HeaderRestaurant = ({ image, title, category }: Props) => (
  <>
    <BannerRestaurant />
    <ImageHeader style={{ backgroundImage: `url(${image})` }}>
      <Category>{category}</Category>
      <Title>{title}</Title>
    </ImageHeader>
  </>
)

export default HeaderRestaurant
