import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { GlobalStyle, AppWrapper } from "./Style";

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
