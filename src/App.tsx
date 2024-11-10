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
      <div>
        <i>
          Hi — I'm Arya Burke — I live in Brooklyn, NY — Here you can find some
          of my art.
        </i>
      </div>
      <div>
        <a href="/photography">Photography</a>
      </div>
      <div>
        <a href="/writing">Writing</a>
      </div>
      <div>
        <a href="/music">Music</a>
      </div>
      <div>
        <a href="/games">Games</a>
      </div>
      <div>
        <a href="/tattooing">Tattooing</a>
      </div>
      <div>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
