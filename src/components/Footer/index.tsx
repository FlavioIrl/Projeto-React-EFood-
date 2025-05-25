import { Container, Icons, ContainerIcons } from './styles'
import Logo from '../../assets/images/logo.png'

const Footer = () => (
  <Container>
    <img src={Logo} alt="papel de fundo" />
    <ContainerIcons>
      <Icons
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram" />
      </Icons>
      <Icons
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook-f" />
      </Icons>
      <Icons href="https://x.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter" />
      </Icons>
    </ContainerIcons>
    <p>
      A Efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Container>
)

export default Footer
