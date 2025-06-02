import { useState } from 'react'
import Button from '../Button'
import {
  Image,
  CardsRestContainer,
  Title,
  Description,
  WindowContainer
} from './styles'

type Props = {
  descricao: string
  foto: string
  nome: string
  preco: number
  porcao?: string
}

const CardsRest = ({ descricao, foto, nome, preco, porcao }: Props) => {
  const [mostrarModal, setMostrarModal] = useState(false)

  return (
    <>
      <CardsRestContainer>
        <Image src={foto} />
        <Title>{nome}</Title>
        <Description>{descricao}</Description>
        <Button
          type={'button'}
          title={'Botao de adição do carrinho'}
          onClick={() => setMostrarModal(true)}
        >
          Adicionar ao carrinho
        </Button>
      </CardsRestContainer>

      {mostrarModal && (
        <WindowContainer>
          <div>
            <img src={foto} />
            <div className="container">
              <h3>{nome}</h3>
              <Description>{descricao}</Description>
              <Description>Serve: de {porcao}</Description>
              <Button
                type="button"
                title="Fechar"
                onClick={() => setMostrarModal(false)}
              >
                {`Adicionar ao carrinho - R$ ${preco.toFixed(2)}`}
              </Button>
            </div>
          </div>
        </WindowContainer>
      )}
    </>
  )
}

export default CardsRest
