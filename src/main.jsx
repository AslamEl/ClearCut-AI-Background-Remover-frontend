import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'


const PUBLISHABLEKEY= import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if(!PUBLISHABLEKEY)
{
  throw new Error('Missing publishable key');
}
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLEKEY}>
          <App/>
      </ClerkProvider>
    </BrowserRouter>
  
)
