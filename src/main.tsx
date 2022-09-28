import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import background from "./components/Icons/dmc12-background.png";
import { ContentWrapper, MainSection } from "./Style";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContentWrapper>
      <img src={background} width="100%" height="100%" />
      <MainSection>
        <App />
      </MainSection>
    </ContentWrapper>
  </React.StrictMode>
);
