import { useParams } from 'react-router-dom'

import HeaderRestaurant from '../../components/HeaderRestaurant'
import MenuList from '../../components/MenuList'
import { useGetCardQuery } from '../../services/api'

const Restaurant = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetCardQuery(id ?? '', { skip: !id })

  if (!restaurant) return <p>Carregando...</p>

  return (
    <>
      <HeaderRestaurant foods={restaurant} />
      <MenuList foods={restaurant.cardapio} />
    </>
  )
}

export default Restaurant
