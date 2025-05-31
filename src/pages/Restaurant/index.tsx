import HeaderRestaurant from '../../components/HeaderRestaurant'
import CardsList from '../../components/CardsList'
import { Foods } from '../Home'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Restaurant = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Foods>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) return <p>Carregando...</p>

  return (
    <>
      <HeaderRestaurant restaurant={restaurant} />
      <CardsList foods={restaurant.cardapio} variant="rest" />
    </>
  )
}

export default Restaurant
