import { Home } from './pages/Home';
import { Login } from './pages/Login'
import { Route, Routes} from 'react-router-dom';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import NavBar from './components/NavBar';
import { Container } from './styles/global';

function App() {

  return (
    <>
      <NavBar />
        
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
        </Routes>
      </Container>
    </>
  )
}

export default App
