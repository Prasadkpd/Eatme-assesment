import 'bulma/css/bulma.css';
import './assets/styles/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={ <Signup /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
