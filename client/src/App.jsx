import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <Link to="/"> Home Page</Link>
          <Link to="/create-post"> Create A Post</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/create-post" element={<CreatePost />}>
            Home
          </Route>
          <Route path="/post/:id" element={<Post />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
