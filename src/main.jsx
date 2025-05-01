import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Callback from "./pages/Callback";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/callback", element: <Callback /> },
]);

// Replace existing ReactDOM render with:
<RouterProvider router={router} />