import { createRoot } from 'react-dom/client'
import App from './Components/App/App.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import store from './Store/index.ts'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  		<Provider store={store}>
    		<App />
  		</Provider>,
  </BrowserRouter>
)
