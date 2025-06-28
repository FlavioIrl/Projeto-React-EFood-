import { useState } from 'react'
import fechar from '../../assets/images/close.png'
import Button from '../Button'
import * as S from './styles'
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
      <S.CardsRestContainer>
        <S.Image src={foto} onClick={() => setMostrarModal(true)} />
        <S.Title>{nome}</S.Title>
        <S.Description>{descricao}</S.Description>
        <Button
          type={'button'}
          title={'Botao de adição do carrinho'}
          onClick={() => setMostrarModal(true)}
        >
          Adicionar ao carrinho
        </Button>
      </S.CardsRestContainer>

      {mostrarModal && (
        <S.WindowContainer>
          <div className="overlay" onClick={() => setMostrarModal(false)} />
          <div className="content" onClick={(e) => e.stopPropagation()}>
            <img src={foto} />
            <div className="container">
              <S.TopWindow>
                <h3>{nome}</h3>
                <S.CloseIcon
                  src={fechar}
                  alt="Fechar"
                  onClick={() => setMostrarModal(false)}
                />
              </S.TopWindow>
              <S.Description>{descricao}</S.Description>
              <S.Description>Serve: {porcao}</S.Description>
              <Button
                type="button"
                title="botão de adicionar ao carrinho"
                onClick={addToCart}
              >
                {`Adicionar ao carrinho - R$ ${preco.toFixed(2)}`}
              </Button>
            </div>
          </div>
        </S.WindowContainer>
      )}
    </>
  )
}

export default CardsRest
