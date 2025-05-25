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
    <ImageHeader
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`
      }}
    >
      <div className="container">
        <Category>{category}</Category>
        <Title>{title}</Title>
      </div>
    </ImageHeader>
  </>
)

export default HeaderRestaurant
