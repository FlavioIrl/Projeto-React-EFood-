import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import CardsList from '../../components/CardsList'

export type Foods = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurant, setRestaurant] = useState<Foods[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])
  return (
    <>
      <Banner />
      <CardsList foods={restaurant} variant="default" />
      <CardsList foods={restaurant} variant="default" />
    </>
  )
}

export default Home
