import { Container } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <img src="" alt="" />
      <div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" style={{ fontSize: '24px' }} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f" style={{ fontSize: '24px' }} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" style={{ fontSize: '24px' }} />
        </a>
      </div>
    </div>
  </Container>
)

export default Footer
