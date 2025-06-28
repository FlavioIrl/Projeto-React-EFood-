import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'

import Cart from './components/Cart'
import Footer from './components/Footer'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Checkout from './components/Checkout'

import { useState } from 'react'

function App() {
  const [showCheckout, setShowCheckout] = useState(false)

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Cart onContinue={() => setShowCheckout(true)} />
        {showCheckout && <Checkout onClose={() => setShowCheckout(false)} />}
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
