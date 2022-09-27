import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import { GlobalStyle } from "./Style";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
