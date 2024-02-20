import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import './App.css'
const App = () => {
  const [search, setSearch] = useState('')
  const searchData = (newData) => {
    setSearch(newData)
  }

  return (
    <div className='container'>
      <Header search={search} searchData={searchData} />
      <Routes>
        <Route path="/" element={<Home  searchData={searchData} search={search} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App