import { useState } from 'react'
import fechar from '../../assets/images/close.png'
import Button from '../Button'
import {
  Image,
  CardsRestContainer,
  Title,
  Description,
  WindowContainer,
  TopWindow,
  CloseIcon
} from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  descricao: string
  foto: string
  nome: string
  preco: number
  porcao?: string
}

const CardsRest = ({ descricao, foto, nome, preco, porcao }: Props) => {
  const dispatch = useDispatch()

  const [mostrarModal, setMostrarModal] = useState(false)

  const addToCart = () => {
    const item = { id: Math.random(), descricao, foto, nome, preco }

    dispatch(add(item))
    dispatch(open())
  }

  return (
    <>
      <CardsRestContainer>
        <Image src={foto} onClick={() => setMostrarModal(true)} />
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
          <div className="overlay" onClick={() => setMostrarModal(false)} />
          <div className="content" onClick={(e) => e.stopPropagation()}>
            <img src={foto} />
            <div className="container">
              <TopWindow>
                <h3>{nome}</h3>
                <CloseIcon
                  src={fechar}
                  alt="Fechar"
                  onClick={() => setMostrarModal(false)}
                />
              </TopWindow>
              <Description>{descricao}</Description>
              <Description>Serve: {porcao}</Description>
              <Button
                type="button"
                title="botão de adicionar ao carrinho"
                onClick={addToCart}
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
