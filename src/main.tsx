import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from "./Page.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <Page />
  </StrictMode>
)
