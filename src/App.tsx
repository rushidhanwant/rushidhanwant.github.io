import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ProjectPage from "./Pages/ProjectDetailsPage/ProjectDetailPage";
import { GlobalStyle, AppWrapper } from "./Style";
import { Projects } from "./api/projects";

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/devnode" element={<ProjectPage {...Projects[0]}/>} />
          <Route path="/clipto" element={<ProjectPage {...Projects[1]}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
