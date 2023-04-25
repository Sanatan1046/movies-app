import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Home";
import Movie from "./Components/Movie";
import SearchResult from "./Components/SearchResult";
import Actor from "./Components/Actor";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/search/:movie",
      element: <SearchResult />,
    },
    {
      path: "/movie/:movieId",
      element: <Movie />,
    },
    {
    path: "/actor/:actorId",
    element: <Actor/>,
  },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
