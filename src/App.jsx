import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"
import { Toaster } from "react-hot-toast"

import { Context } from "./context/context"

import { Home } from "./views/Home"

export const App = () => {
  const [ cart, setCart ] = useState([])
  
  const context = { cart, setCart }

  return (
    <>
    <Toaster/>
    <Context.Provider value={context}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </Context.Provider>
    </>
  )
}