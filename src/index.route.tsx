import { Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/Main.page';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};
