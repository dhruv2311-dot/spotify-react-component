import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import MainMenu from './components/Mainmenu.jsx'
import Footer from './components/Bottom.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <MainMenu/>
  <Footer/>
  </StrictMode>,
)
