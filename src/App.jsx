import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Products from './pages/Products'
import DefaultLayout from './layouts/DefaultLayout'
import SingleProduct from './pages/SingleProduct'
import { BudgetProvider } from './contexts/BudgetContext'
function App() {


  return (
    <>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<HomePage />}>Home</Route>
              <Route path='/chisiamo' element={<ChiSiamo />}>Chi Siamo</Route>
              <Route path='/products' element={<Products />}></Route>
              <Route path='/products/:id' element={<SingleProduct />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  )
}

export default App
