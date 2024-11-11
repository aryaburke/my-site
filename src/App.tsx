import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./Contact.tsx";
import { Photography } from "./photography/Photography.tsx";
import { Hubris } from "./photography/Hubris.tsx";
import { Wonder } from "./photography/Wonder.tsx";
import { Oxidation } from "./photography/Oxidation.tsx";
import { Community } from "./photography/Community.tsx";
import { Strangers } from "./photography/Strangers.tsx";

/*
TODOS:
- italics for when each section is updated
- handle vertical photos
*/
function Home() {
  return (
    <div className="text-container">
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
    </div>
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
  {
    path: "/photography/strangers",
    element: <Strangers />,
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
  // {
  //   path: "/friends",
  //   element: <Friends />,
  // },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
