import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setListOfPosts(res.data);
    });
  }, []);

  return (
    <div className="App">
      {listOfPosts.map((post, index) => (
        <div className="post" key={post.id}>
          <div className="title">{post.title}</div>
          <div className="body">{post.postText}</div>
          <div className="footer">{post.username}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
