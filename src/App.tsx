import { Home } from './pages/Home';
import { Login } from './pages/Login'
import { Route, Routes} from 'react-router-dom';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <NavBar />
        
      <div className="App">
        <hr /> <hr /> <br />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
        </Routes>

      </div>
    </>
  )
}

export default App
