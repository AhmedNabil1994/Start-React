// libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
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

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home pageTitle={"Home"} />,
      },
      {
        path: "home",
        element: <Home pageTitle={"Home"} />,
      },
      {
        path: "about",
        element: <About pageTitle={"About"} />,
      },
      {
        path: "portfolio",
        element: <Portfolio pageTitle={"Portfolio"} />,
      },
      {
        path: "contact",
        element: <Contact pageTitle={"Contact"} />,
      },
      {
        path: "*",
        element: <NotFound pageTitle={"404"} />,
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
