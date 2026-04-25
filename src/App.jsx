import {Routes, Route, BrowserRouter} from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Login from './components/Auth/Login'
import ChatRoom from './components/Chat/ChatRoom';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<ChatRoom />} path='/' />
          <Route element={<Login />} path='/login' />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
