import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppWithPages } from "./AppWithPages";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AppWithPages />
  </StrictMode>,
);
