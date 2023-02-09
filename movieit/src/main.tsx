import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Movie } from './components/pages/Movie'
import { PersonDetails } from './components/pages/PersonDetails'
import { TvShow } from './components/pages/TvShow'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <Movie/> */}
    {/* <TvShow/> */}
    {/* <PersonDetails/> */}
  </React.StrictMode>,
)
