import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Landing } from './pages/Landing'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'
import { NewFile } from './pages/NewFile'
import { ViewSubmission } from './pages/ViewSubmission'

function App() {

  return (
    <div className='bg-neutral-900 text-gray-100 min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/new' element={<NewFile />} />
          <Route path='/submission/:id' element={<ViewSubmission />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
