import { Routes, Route } from "react-router";
import Layout from "./pages/Layout/Layout";
import PrivateRoute from "./hoc/PrivateRoute";

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
        </Route>
        <Route path="favorites" element={<div>Favorites</div>} />
        <Route path="film/:id" element={<FilmPage />} />
      </Routes>
    </div>
  );
}

export default App;
