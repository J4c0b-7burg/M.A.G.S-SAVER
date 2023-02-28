import { Link } from "react-router-dom";

const Post = ({ post }) => {

  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
    height: "700px"
  };
  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.title}</h1>
      </Link>
      <h2>Rated {post.rating}/10</h2>
      <div style={{width: "400px", height: "100px", objectFit: "fill"}}>
      <img src={post.image} alt="MAGS-Image"></img>
      </div>
      <h2>{post.completed}</h2>
      <h2>{post.notes}</h2>
    </div>
  );
};

export default Post