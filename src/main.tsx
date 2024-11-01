import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import List from '@/pages/posts/list'
import Write from '@/pages/posts/write'
import SignIn from './pages/signIn/signin'
import SignUp from './pages/signUp/signup'
import Layout from './components/Layout/Layout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/posts'>
            <Route path="" element={<List />} />
            <Route path="write" element={<Write />} />
          </Route>
      </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
