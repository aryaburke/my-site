import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./pages/Contact.tsx";
import { Photography } from "./pages/Photography.tsx";
import { Hubris } from "./pages/Hubris.tsx";
import { Wonder } from "./pages/Wonder.tsx";
import { Oxidation } from "./pages/Oxidation.tsx";
import { Beacons } from "./pages/Beacons.tsx";
import { Strangers } from "./pages/Strangers.tsx";
import { Writing } from "./pages/Writing.tsx";
import { Friends } from "./pages/Friends.tsx";
import { Games } from "./pages/Games.tsx";
import { Music } from "./pages/Music.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Tattoos } from "./pages/Tattoos.tsx";

/*
TODOS:
- italics for when each section is updated
- favicon
- url
- tattoos
- writing
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
      <p>
        <a href="/writing">Writing</a>
      </p>
      <p>
        <a href="/music">Music</a>
      </p>
      <p>
        <a href="/games">Games</a>
      </p>
      <p>
        <a href="/tattoos">Tattoos</a>
      </p>
      <p>
        <a href="/friends">Friends</a>
      </p>
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
    errorElement: <NotFound />,
  },
  {
    path: "/photography",
    element: <Photography />,
  },
  {
    path: "/photography/beacons",
    element: <Beacons />,
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
  {
    path: "/writing",
    element: <Writing />,
  },
  {
    path: "/music",
    element: <Music />,
  },
  {
    path: "/games",
    element: <Games />,
  },
  {
    path: "/tattoos",
    element: <Tattoos />,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
