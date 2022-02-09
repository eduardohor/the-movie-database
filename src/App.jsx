import { Details } from "./pages/Details";
import { Home } from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MovieIdProvider } from "./components/Context/MovieIdProvider";

function App() {
  return (
    <Router>
      <MovieIdProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<h1>Essa rota não existe</h1>} />
        </Routes>
      </MovieIdProvider>
    </Router>
  );
}

export default App;
