import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/photography",
  //   element: <Photography />,
  // },
  // {
  //   path: "/writing",
  //   element: <Writing />,
  // },
  // {
  //   path: "/music",
  //   element: <Music />,
  // },
  // {
  //   path: "/games",
  //   element: <Games />,
  // },
  // {
  //   path: "/tattooing",
  //   element: <Tattooing />,
  // },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function Home() {
  return (
    <>
      <p>
        <i>
          Hi — I'm Arya Burke — I live in Brooklyn, NY — Here you can find some
          of my art.
        </i>
      </p>
      <p>
        <a href="/photography">Photography</a>
      </p>
      {/* <p>
        <a href="/writing">Writing</a>
      </p>
      <p>
        <a href="/music">Music</a>
      </p>
      <p>
        <a href="/games">Games</a>
      </p>
      <p>
        <a href="/tattooing">Tattooing</a>
      </p> */}
      <p>
        <a href="/contact">Contact</a>
      </p>
    </>
  );
}

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
