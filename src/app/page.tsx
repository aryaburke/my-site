import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./contact/page";
import { Photography } from "../pages/Photography";
import { Writing } from "./writing/page";
import { Friends } from "./friends/page";
import { Games } from "./games/page";
import { Music } from "./music/page";
import { NotFound } from "./not-found";
import { Tattoos } from "./tattoos/page";
import { Myths } from "../pages/writing/Myths";
import { PoemNode } from "../pages/writing/PoemNode";
import { getPoems, getUrlFromTitle, type Poem } from "../helpers/poemHelpers";
import { Publications } from "../pages/writing/Publications";
import { PoemList } from "../pages/writing/PoemList";
import PhotoContainer from "../components/PhotoContainer";
import { PHOTO_PAGES } from "../helpers/photoConsts";

export default function Home() {
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

// const poemRoutes = getPoems().map((poem: Poem) => {
//   return {
//     path: getUrlFromTitle(poem.title),
//     element: <PoemNode poem={poem} />,
//   };
// });

// const photoRoutes = PHOTO_PAGES.map((page) => {
//   return {
//     path: `/photography/${page.slug || page.title.toLowerCase()}`,
//     element: <PhotoContainer photos={page.photos} />,
//   };
// });

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <NotFound />,
//   },
//   {
//     path: "/photography",
//     element: <Photography />,
//   },
//   {
//     path: "/writing",
//     element: <Writing />,
//   },
//   {
//     path: "/writing/myths",
//     element: <Myths />,
//   },
//   {
//     path: "/writing/poems",
//     element: <PoemList />,
//   },
//   {
//     path: "/writing/publications",
//     element: <Publications />,
//   },
//   {
//     path: "/music",
//     element: <Music />,
//   },
//   {
//     path: "/games",
//     element: <Games />,
//   },
//   {
//     path: "/tattoos",
//     element: <Tattoos />,
//   },
//   {
//     path: "/friends",
//     element: <Friends />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
//   ...poemRoutes,
//   ...photoRoutes,
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
