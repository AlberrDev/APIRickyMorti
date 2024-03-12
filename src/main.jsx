import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { HomeRouter } from './router/HomeRouter'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <BrowserRouter>
    <HomeRouter/>
  </BrowserRouter>
  </React.StrictMode>,
)
