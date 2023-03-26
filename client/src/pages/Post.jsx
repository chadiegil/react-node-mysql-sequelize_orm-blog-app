import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const [singlePost, setSinglePost] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
      setSinglePost(res.data);
    });
  }, []);

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title"> {singlePost.title} </div>
          <div className="body">{singlePost.postText}</div>
          <div className="footer">{singlePost.username}</div>
        </div>
      </div>
      <div className="rightSide">Comment Section</div>
    </div>
  );
};

export default Post;
