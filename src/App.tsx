import { Routes, Route } from "react-router";
import Layout from "./pages/Layout/Layout";
import PrivateRoute from "./hoc/PrivateRoute";
import FilmPage from "./pages/FilmPage/FilmPage";
import MainPage from "./pages/MainPage/MainPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route
            path="profile"
            element={<PrivateRoute>Private</PrivateRoute>}
          />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="film/:id" element={<FilmPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
