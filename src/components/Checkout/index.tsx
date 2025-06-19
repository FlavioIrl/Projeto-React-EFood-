import { useState } from 'react'
import Button from '../Button'
import * as S from './styles'

const Checkout = () => {
  const [etapaPagamento, setEtapaPagamento] = useState(false)
  return (
    <S.CheckoutContainer>
      <S.Overlay />

      {etapaPagamento ? (
        <S.SideBar>
          <h3>Entrega</h3>
          <S.Card>
            <S.InputGroup>
              <label>Quem irá receber</label>
              <input type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label>Endereço</label>
              <input type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label>Cidade</label>
              <input type="text" />
            </S.InputGroup>
            <S.Local>
              <S.InputGroup>
                <label>CEP</label>
                <input type="text" />
              </S.InputGroup>
              <S.InputGroup>
                <label>Número</label>
                <input type="text" />
              </S.InputGroup>
            </S.Local>
            <S.InputGroup>
              <label>Complemento (opcional)</label>
              <input type="text" />
            </S.InputGroup>
          </S.Card>
          <Button
            type="button"
            title="Click para continuar ao pagamento"
            onClick={() => setEtapaPagamento(false)}
          >
            Continuar com pagamento
          </Button>
          <Button type="button" title="Click para voltar ao carrinho">
            Voltar para o carrinho
          </Button>
        </S.SideBar>
      ) : (
        <S.SideBar>
          <h3>Pagamento - Valor a pagar R$ 190,90</h3>
          <S.Card>
            <S.InputGroup>
              <label>Nome do cartão</label>
              <input type="text" />
            </S.InputGroup>
            <S.InputGroupPag>
              <S.InputGroup>
                <label>Numero do cartao</label>
                <input type="text" />
              </S.InputGroup>
              <S.InputGroup>
                <label>CVV</label>
                <input type="text" />
              </S.InputGroup>
            </S.InputGroupPag>
            <S.Local>
              <S.InputGroup>
                <label>Mês de vencimento</label>
                <input type="text" />
              </S.InputGroup>
              <S.InputGroup>
                <label>Ano de vencimento</label>
                <input type="text" />
              </S.InputGroup>
            </S.Local>
          </S.Card>
          <Button type="button" title="Click para continuar ao pagamento">
            Finalizar o pagamento
          </Button>
          <Button
            type="button"
            title="Click para voltar ao carrinho"
            onClick={() => setEtapaPagamento(true)}
          >
            Voltar para a edição de endereço
          </Button>
        </S.SideBar>
      )}
    </S.CheckoutContainer>
  )
}

export default Checkout
