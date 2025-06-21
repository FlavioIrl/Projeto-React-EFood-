import { useState } from 'react'
import Button from '../Button'
import * as S from './styles'
import { useFormik } from 'formik'
import * as  Yup from 'yup'

const Checkout = () => {
  const [isDeliveryStep, setIsDeliveryStep] = useState(true)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      zipCode: '',
      phoneNumber: '',
      addressExtra: '',
      cardOwner: '',
      cardEmail: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      
      email: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),

      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatório'),

      zipCode: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),

      // phoneNumber: Yup.string()
      //   // .matches()

      addressExtra: Yup.string()
        .max(100, 'O complemento não pode ter mais que 100 caracteres'),
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  console.log(form)
  return (
    <form onSubmit={form.handleSubmit}>
      <S.CheckoutContainer>
        <S.Overlay />
        {isDeliveryStep ? (
          <S.SideBar>
            <h3>Entrega</h3>
            <S.Card>
              <S.InputGroup>
                <label htmlFor="fullName">Quem irá receber</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={form.values.fullName}
                  onBlur={form.handleChange}
                />
              </S.InputGroup>

              <S.InputGroup>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.values.email}
                  onBlur={form.handleChange}
                />
              </S.InputGroup>

              <S.InputGroup>
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={form.values.cpf}
                  onBlur={form.handleChange}
                />
              </S.InputGroup>

              <S.Local>
                <S.InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={form.values.zipCode}
                    onBlur={form.handleChange}
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <label htmlFor="phoneNumber">Telefone</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={form.values.phoneNumber}
                    onBlur={form.handleChange}
                  />
                </S.InputGroup>
              </S.Local>

              <S.InputGroup>
                <label htmlFor="addressExtra">Complemento</label>
                <input
                  type="text"
                  id="addressExtra"
                  name="addressExtra"
                  value={form.values.addressExtra}
                  onBlur={form.handleChange}
                />
              </S.InputGroup>
            </S.Card>

            <Button
              type="button"
              title="Ir para pagamento"
              onClick={() => setIsDeliveryStep(false)}
            >
              Continuar com pagamento
            </Button>

            <Button
              type="button"
              title="Voltar para o carrinho"
              onClick={() => {}}
            >
              Voltar para o carrinho
            </Button>
          </S.SideBar>
        ) : (
          <S.SideBar>
            <h3>Pagamento - Valor a pagar</h3>
            <S.Card>
              <S.InputGroup>
                <label htmlFor="cardOwner">Nome do titular</label>
                <input
                  type="text"
                  id="cardOwner"
                  name="cardOwner"
                  value={form.values.cardOwner}
                  onBlur={form.handleChange}
                />
              </S.InputGroup>

              <S.InputGroup>
                <label htmlFor="cardEmail">Email do titular</label>
                <input
                  type="email"
                  id="cardEmail"
                  name="cardEmail"
                  value={form.values.cardEmail}
                  onBlur={form.handleChange}
                />
              </S.InputGroup>

              <S.InputGroupPag>
                <S.InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onBlur={form.handleChange}
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <label htmlFor="cardCode">CVV</label>
                  <input
                    type="text"
                    id="cardCode"
                    name="cardCode"
                    value={form.values.cardCode}
                    onBlur={form.handleChange}
                  />
                </S.InputGroup>
              </S.InputGroupPag>

              <S.Local>
                <S.InputGroup>
                  <label htmlFor="expiresMonth">Mês</label>
                  <input
                    type="text"
                    id="expiresMonth"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onBlur={form.handleChange}
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <label htmlFor="expiresYear">Ano</label>
                  <input
                    type="text"
                    id="expiresYear"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onBlur={form.handleChange}
                  />
                </S.InputGroup>
              </S.Local>
            </S.Card>

            <Button
              title="Finalizar compra"
              type="button"
              onClick={form.handleSubmit}
            >
              Finalizar compra
            </Button>

            <Button
              type="button"
              title="Voltar para entrega"
              onClick={() => setIsDeliveryStep(true)}
            >
              Voltar para a edição de endereço
            </Button>
          </S.SideBar>
        )}
        {/* <S.SideBar>
          <h3>Pedido realizado - Id</h3>
          <p className='marginTop'>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <br />
          
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão autorizados
            a realizar cobranças extras.
          </p>
          <br />
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          </p>
          <br />
          <p className='marginBottom'>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button type="button" title="Finalizar o pagamento" onClick={() => {}}>
            Concluir
          </Button>
        </S.SideBar> */}
      </S.CheckoutContainer>
    </form>
  )
}

export default Checkout
