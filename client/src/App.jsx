import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/create-post">
          <button>Create Post</button>
        </Link>

        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/create-post" element={<CreatePost />}>
            Home
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
