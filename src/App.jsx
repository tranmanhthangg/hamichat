import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider.jsx';
import Login from './components/Auth/Login'
import ChatRoom from './components/Chat/ChatRoom';
import AppProvider from './Context/AppProvider.jsx';
import AddRoomModal from './components/Modals/AddRoomModal.jsx';
import InviteMemberModal from './components/Modals/InviteMemberModal.jsx';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route element={<ChatRoom />} path='/' />
            <Route element={<Login />} path='/login' />
          </Routes>
          <AddRoomModal />
          <InviteMemberModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
