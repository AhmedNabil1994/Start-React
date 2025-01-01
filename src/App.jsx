// libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
// app components
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const [title, setTitle] = useState("Home");
  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home pageTitle={"Home"} setTitle={setTitle} />,
        },
        {
          path: "home",
          element: <Home pageTitle={"Home"} setTitle={setTitle} />,
        },
        {
          path: "about",
          element: <About pageTitle={"About"} setTitle={setTitle} />,
        },
        {
          path: "portfolio",
          element: <Portfolio pageTitle={"Portfolio"} setTitle={setTitle} />,
        },
        {
          path: "contact",
          element: <Contact pageTitle={"Contact"} setTitle={setTitle} />,
        },
        {
          path: "*",
          element: <NotFound pageTitle={"404"} setTitle={setTitle} />,
        },
      ],
    },
  ]);
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <RouterProvider router={appRouter} />;
}

export default App;
