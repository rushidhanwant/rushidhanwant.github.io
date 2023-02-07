import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ProjectDetailsPage from "./Pages/ProjectDetailsPage/ProjectDetailPage";
import {
  GlobalStyle,
  AppWrapper,
  GlobalStyleProjectDetails,
  GlobalStyleProjects,
} from "./Style";
import { Projects } from "./api/projects";
import { useEffect } from "react";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <GlobalStyle />
                <LandingPage />
              </>
            }
          />
          <Route
            path="/devnode"
            element={
              <>
                <GlobalStyleProjectDetails />
                <ProjectDetailsPage {...Projects[0]} />
              </>
            }
          />
          <Route
            path="/clipto"
            element={
              <>
                <GlobalStyleProjectDetails />
                <ProjectDetailsPage {...Projects[1]} />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <GlobalStyleProjects />
                <ProjectPage />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
