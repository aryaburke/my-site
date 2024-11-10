import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function Home() {
  return (
    <div className="container">
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
        <a href="/tattooing">Tattooing</a>
      </p>
      <p>
        <a href="/contact">Contact</a>
      </p>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
