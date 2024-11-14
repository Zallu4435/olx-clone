import React from 'react'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import Details from './components/Details'
import { GoogleOAuthProvider } from '@react-oauth/google'
import LoginPage from './components/authentication/LoginPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
    <ToastContainer theme='dark' />
    <GoogleOAuthProvider clientId='our_actual_client_id_here'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/details' element={<Details />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      </GoogleOAuthProvider>

    </div>
  )
}

export default App
