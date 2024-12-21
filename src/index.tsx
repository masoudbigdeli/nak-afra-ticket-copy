import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import './i18n/index.ts'
import { registerServiceWorker } from './utils/register-serviceWorker.ts'

const App = lazy(() => import('./App.tsx'))
const CustomToastContainer = lazy(() => import('./styles/general/custom-toast-container.tsx'))

registerServiceWorker()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <CustomToastContainer className='custom-toast-container' hideProgressBar={true} autoClose={5000} />
    </BrowserRouter>
  </StrictMode>
  ,
)