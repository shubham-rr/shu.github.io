import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Profile from './pages/Profile'
import Portfolio from './pages/Portfolio'
import Etc from './pages/Etc'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/etc" element={<Etc />} />
      </Routes>
    </>
  )
}
