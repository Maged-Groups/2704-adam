import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./main.css"
import "./styles.css"
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/index.js'





createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>

  </BrowserRouter >
)
