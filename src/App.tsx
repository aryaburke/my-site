import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./pages/Contact.tsx";
import { Photography } from "./pages/Photography.tsx";
import { Hubris } from "./pages/photography/Hubris.tsx";
import { Wonder } from "./pages/photography/Wonder.tsx";
import { Oxidation } from "./pages/photography/Oxidation.tsx";
import { Beacons } from "./pages/photography/Beacons.tsx";
import { Strangers } from "./pages/photography/Strangers.tsx";
import { Writing } from "./pages/Writing.tsx";
import { Friends } from "./pages/Friends.tsx";
import { Games } from "./pages/Games.tsx";
import { Music } from "./pages/Music.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Tattoos } from "./pages/Tattoos.tsx";
import { Myths } from "./pages/writing/Myths.tsx";
import { PoemNode } from "./pages/writing/PoemNode.tsx";
import {
  getPoems,
  getUrlFromTitle,
  type Poem,
} from "./helpers/poemHelpers.tsx";
import { Publications } from "./pages/writing/Publications.tsx";
import { PoemsList } from "./pages/writing/PoemsList.tsx";

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

const poemRoutes = getPoems().map((poem: Poem) => {
  return {
    path: getUrlFromTitle(poem.title),
    element: <PoemNode poem={poem} />,
  };
});

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
    path: "/writing/myths",
    element: <Myths />,
  },
  {
    path: "/writing/poems",
    // TODO: do I want this?
    element: <PoemsList />,
  },
  {
    path: "/writing/publications",
    element: <Publications />,
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
  ...poemRoutes,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
