import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./Contact.tsx";
import { Photography } from "./photography/Photography.tsx";
import Hubris from "./photography/Hubris.tsx";
import Wonder from "./photography/Wonder.tsx";
import Oxidation from "./photography/Oxidation.tsx";
import Community from "./photography/Community.tsx";

/*
TODOS:
- italics for when the page is updated

*/
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
        <a href="/games">Games</a>
      </p>
      <p>
        <a href="/music">Music</a>
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/photography",
    element: <Photography />,
  },
  {
    path: "/photography/community",
    element: <Community />,
  },
  {
    path: "/photography/oxidation",
    element: <Oxidation />,
  },
  {
    path: "/photography/wonder",
    element: <Wonder />,
  },

  {
    path: "/photography/hubris",
    element: <Hubris />,
  },
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

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
