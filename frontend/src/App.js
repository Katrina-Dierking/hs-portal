import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Login from './views/login/Login'
import LandingPage from './views/landingPage/LandingPage'
import Register from './views/register/Register'
import Student from './views/students/Student'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route exact path='/' element={<LandingPage /> } />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/student' element={<Student/>} />
        </Routes>
      
      </main>
      <Footer />

    </BrowserRouter>
  )
}

export default App
