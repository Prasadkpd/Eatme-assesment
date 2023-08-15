import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Login from './Login/Login';
import { ProtectedPage } from './ProtectedPage';

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route element={<ProtectedPage userRole="admin" />}>
          <Route path="/dashboard" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
