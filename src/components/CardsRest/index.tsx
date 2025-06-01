import Button from '../Button'
import { Image, CardsRestContainer, Title, Description } from './styles'

type Props = {
  descricao: string
  foto: string
  nome: string
  preco: number
  porcao?: string
}

const CardsRest = ({ descricao, foto, nome, preco, porcao }: Props) => (
  <CardsRestContainer>
    <Image src={foto} />
    <Title>{nome}</Title>
    <Description>{descricao}</Description>
    <Button type={'button'} title={'Botao de adição do carrinho'}>
      Adicionar ao carrinho
    </Button>
    <p>{preco}</p>
    <p>{porcao}</p>
  </CardsRestContainer>
)

export default CardsRest
