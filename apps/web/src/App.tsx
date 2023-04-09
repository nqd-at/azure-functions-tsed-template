import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { routes } from "./routes";
import { MantineProvider } from "@mantine/core";

const router = createBrowserRouter(routes as unknown as RouteObject[]);

function App() {
  return (
    <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
