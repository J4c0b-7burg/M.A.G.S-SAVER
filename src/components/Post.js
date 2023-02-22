import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {

  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.title}</h1>
      </Link>
      <h2>{post.rating}</h2>
    </div>
  );
};

export default Post