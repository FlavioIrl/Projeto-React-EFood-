import HeaderRestaurant from '../../components/HeaderRestaurant'
import { Foods } from '../Home'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MenuList from '../../components/MenuList'

const Restaurant = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Foods>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) return <p>Carregando...</p>

  return (
    <>
      <HeaderRestaurant foods={restaurant} />
      <MenuList foods={[restaurant.cardapio]} />
    </>
  )
}

export default Restaurant
