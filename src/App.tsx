import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'

import Cart from './components/Cart'
import Footer from './components/Footer'
import { GlobalCss } from './styles'
import Rotas from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Cart />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
