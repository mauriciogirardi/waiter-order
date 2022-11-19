import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}
