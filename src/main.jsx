import React from 'react'
import ReactDOM from 'react-dom/client'
import { CustomRoute } from './Routes/CustomRoute'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomRoute/>
    </BrowserRouter>
  </React.StrictMode>,
)
