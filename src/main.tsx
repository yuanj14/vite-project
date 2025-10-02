import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './digram/jointjs/App'

const root = createRoot(document.getElementById('root')!)

root.render(
  // <StrictMode>
    <App />
  // </StrictMode>
)
