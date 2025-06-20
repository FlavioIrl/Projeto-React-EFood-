import { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as Yup from 'yup'

import Button from '../Button'
import * as S from './styles'

import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const [etapaPagamento, setEtapaPagamento] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const checkInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    return isTouched && isInvalid
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      zipCode: '',
      phoneNumber: '',
      addressExtra: '',
      cardHolderName: '',
      cardNumber: '',
      cardDisplayName: '',
      cvv: '',
      expirationMonth: '',
      expirationYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(5).required(),
      email: Yup.string().email().required(),
      cpf: Yup.string().min(14).max(14).required(),
      zipCode: Yup.string().min(8).required(),
      phoneNumber: Yup.string().min(10).required(),
      addressExtra: Yup.string().min(3).required(),
      cardDisplayName: Yup.string().email().required(),
      cardHolderName: Yup.string().min(5).required(),
      cardNumber: Yup.string()
        .matches(/^\d{16}$/, '16 dígitos')
        .required(),
      cvv: Yup.string()
        .matches(/^\d{3,4}$/, '3 ou 4 dígitos')
        .required(),
      expirationMonth: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, '01 a 12')
        .required(),
      expirationYear: Yup.string()
        .matches(/^\d{2}$/, '2 dígitos')
        .required()
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.email
        },
        payment: {
          card: {
            active: true,
            code: Number(values.cvv),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpf,
              name: values.fullName
            },
            expires: {
              month: Number(values.expirationMonth),
              year: Number(values.expirationYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  return (
    <S.CheckoutContainer>
      <S.Overlay />

      {etapaPagamento ? (
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
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('fullName') ? 'error' : ''}
              />
            </S.InputGroup>

            <S.InputGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('email') ? 'error' : ''}
              />
            </S.InputGroup>

            <S.InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('cpf') ? 'error' : ''}
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
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputError('zipCode') ? 'error' : ''}
                />
              </S.InputGroup>

              <S.InputGroup>
                <label htmlFor="phoneNumber">Telefone</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={form.values.phoneNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputError('phoneNumber') ? 'error' : ''}
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
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('addressExtra') ? 'error' : ''}
              />
            </S.InputGroup>
          </S.Card>

          <Button
            type="button"
            title="Ir para pagamento"
            onClick={() => setEtapaPagamento(false)}
          >
            Continuar com pagamento
          </Button>

          <Button type="button" title="Voltar para o carrinho">
            Voltar para o carrinho
          </Button>
        </S.SideBar>
      ) : (
        <S.SideBar>
          <h3>Pagamento - Valor a pagar</h3>
          <form onSubmit={form.handleSubmit}>
            <S.Card>
              <S.InputGroup>
                <label htmlFor="cardHolderName">Nome do titular</label>
                <input
                  type="text"
                  id="cardHolderName"
                  name="cardHolderName"
                  value={form.values.cardHolderName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputError('cardHolderName') ? 'error' : ''}
                />
              </S.InputGroup>

              <S.InputGroup>
                <label htmlFor="cardDisplayName">Email do titular</label>
                <input
                  type="email"
                  id="cardDisplayName"
                  name="cardDisplayName"
                  value={form.values.cardDisplayName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputError('cardDisplayName') ? 'error' : ''}
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
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputError('cardNumber') ? 'error' : ''}
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputError('cvv') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.InputGroupPag>

              <S.Local>
                <S.InputGroup>
                  <label htmlFor="expirationMonth">Mês</label>
                  <input
                    type="text"
                    id="expirationMonth"
                    name="expirationMonth"
                    value={form.values.expirationMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputError('expirationMonth') ? 'error' : ''
                    }
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <label htmlFor="expirationYear">Ano</label>
                  <input
                    type="text"
                    id="expirationYear"
                    name="expirationYear"
                    value={form.values.expirationYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputError('expirationYear') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Local>
            </S.Card>

            <Button title="Finalizar compra" type="submit" disabled={isLoading}>
              {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
            </Button>

            <Button
              type="button"
              title="Voltar para entrega"
              onClick={() => setEtapaPagamento(true)}
            >
              Voltar para a edição de endereço
            </Button>
          </form>
        </S.SideBar>
      )}
    </S.CheckoutContainer>
  )
}

export default Checkout
