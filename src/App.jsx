// libraries
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
// child components
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
// provider component
import TitleProvider from "./context/TitleContext";

const appRouter = createHashRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <TitleProvider>
      <RouterProvider router={appRouter} />
    </TitleProvider>
  );
}

export default App;
