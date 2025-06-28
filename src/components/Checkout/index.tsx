import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { formataPreco, getTotalPrice } from '../../utils'
import { clear } from '../../store/reducers/cart'

import Button from '../Button'
import * as S from './styles'
import * as Yup from 'yup'

type Props = {
  onClose: () => void
}

const Checkout = ({ onClose }: Props) => {
  const [isDeliveryStep, setIsDeliveryStep] = useState(true)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isLoading, data, isSuccess }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const totalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      numberAdress: '',
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

      address: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),

      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),

      zipCode: Yup.string().required('O campo é obrigatório'),

      numberAdress: Yup.string().required('O campo é obrigatório'),
      addressExtra: Yup.string().max(
        100,
        'O complemento não pode ter mais que 100 caracteres'
      ),
      cardOwner: Yup.string().when((values, schema) =>
        !isDeliveryStep ? schema.required('O campo é obrigatório') : schema
      ),
      cardEmail: Yup.string().when((values, schema) =>
        !isDeliveryStep ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        !isDeliveryStep ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        !isDeliveryStep ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        !isDeliveryStep ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        !isDeliveryStep ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.numberAdress),
            complement: values.addressExtra
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
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

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <S.CheckoutContainer>
        {isSuccess && data ? (
          <S.SideBar>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p className="marginTop">
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>

            <p className="marginTop">
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p className="marginTop">
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p className="marginBottom marginTop">
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button
              type="button"
              title="Finalizar o pagamento"
              onClick={() => {
                onClose()
                navigate('/')
              }}
            >
              Concluir
            </Button>
          </S.SideBar>
        ) : isDeliveryStep ? (
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
                />
                <small>
                  {getErrorMessage('fullName', form.errors.fullName)}
                </small>
              </S.InputGroup>

              <S.InputGroup>
                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('address', form.errors.address)}</small>
              </S.InputGroup>

              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('city', form.errors.city)}</small>
              </S.InputGroup>

              <S.Local>
                <S.InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <InputMask
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="99999-999"
                  />
                  <small>
                    {getErrorMessage('zipCode', form.errors.zipCode)}
                  </small>
                </S.InputGroup>

                <S.InputGroup>
                  <label htmlFor="numberAdress">Número</label>
                  <input
                    type="text"
                    id="numberAdress"
                    name="numberAdress"
                    value={form.values.numberAdress}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('numberAdress', form.errors.numberAdress)}
                  </small>
                </S.InputGroup>
              </S.Local>

              <S.InputGroup>
                <label htmlFor="addressExtra">Complemento(opcional)</label>
                <input
                  type="text"
                  id="addressExtra"
                  name="addressExtra"
                  value={form.values.addressExtra}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('addressExtra', form.errors.addressExtra)}
                </small>
              </S.InputGroup>
            </S.Card>

            <Button
              type="button"
              title="Ir para pagamento"
              onClick={() => {
                form.validateForm().then((errors) => {
                  if (Object.keys(errors).length === 0) {
                    setIsDeliveryStep(false)
                  } else {
                    form.setTouched({
                      fullName: true,
                      address: true,
                      city: true,
                      zipCode: true,
                      numberAdress: true
                    })
                  }
                })
              }}
            >
              Continuar com pagamento
            </Button>

            <Button
              type="button"
              title="Voltar para o carrinho"
              onClick={onClose}
            >
              Voltar para o carrinho
            </Button>
          </S.SideBar>
        ) : (
          <S.SideBar>
            <h3>Pagamento - Valor a pagar {formataPreco(totalPrice)}</h3>
            <S.Card>
              <S.InputGroup>
                <label htmlFor="cardOwner">Nome do titular</label>
                <input
                  type="text"
                  id="cardOwner"
                  name="cardOwner"
                  value={form.values.cardOwner}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('cardOwner', form.errors.cardOwner)}
                </small>
              </S.InputGroup>

              <S.InputGroup>
                <label htmlFor="cardEmail">Email do titular</label>
                <input
                  type="email"
                  id="cardEmail"
                  name="cardEmail"
                  value={form.values.cardEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('cardEmail', form.errors.cardEmail)}
                </small>
              </S.InputGroup>

              <S.InputGroupPag>
                <S.InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="9999 9999 9999 9999"
                  />
                  <small>
                    {getErrorMessage('cardNumber', form.errors.cardNumber)}
                  </small>
                </S.InputGroup>

                <S.InputGroup>
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    type="text"
                    id="cardCode"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="999"
                  />
                  <small>
                    {getErrorMessage('cardCode', form.errors.cardCode)}
                  </small>
                </S.InputGroup>
              </S.InputGroupPag>

              <S.Local>
                <S.InputGroup>
                  <label htmlFor="expiresMonth">Mês</label>
                  <InputMask
                    type="text"
                    id="expiresMonth"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="99"
                  />
                  <small>
                    {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
                  </small>
                </S.InputGroup>

                <S.InputGroup>
                  <label htmlFor="expiresYear">Ano</label>
                  <InputMask
                    type="text"
                    id="expiresYear"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="99"
                  />
                  <small>
                    {getErrorMessage('expiresYear', form.errors.expiresYear)}
                  </small>
                </S.InputGroup>
              </S.Local>
            </S.Card>

            <Button
              title="Finalizar compra"
              type="button"
              onClick={form.handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
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
      </S.CheckoutContainer>
    </form>
  )
}

export default Checkout
