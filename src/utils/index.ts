import { CartItem } from '../store/reducers/cart'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (items: CartItem[]) => {
  return items.reduce((acc, item) => acc + item.preco, 0)
}
