import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import List from '@/pages/posts/list'
import Write from '@/pages/posts/write'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board" element={<List />} />
      <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
