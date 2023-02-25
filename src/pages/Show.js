import { Link, useLoaderData, Form } from "react-router-dom";

const Show = () => {
  const post = useLoaderData();

  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.title}</h1>
      <h2>{post.rating}</h2>
      <img src={post.image} alt="MAGS-Image"></img>
      <h2>{post.completed}</h2>
      <h2>{post.notes}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Create a M.A.G.S</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="title"
            placeholder="write Title here"
            defaultValue={post.title}
          />
          <input
            type="text"
            name="rating"
            placeholder="write Rating here"
            defaultValue={post.rating}
          />
          <input
            type="text"
            name="image"
            placeholder="image address"
            defaultValue={post.image}
          />
          <input
            type="text"
            name="completed"
            placeholder="have you completed this MAGS"
            defaultValue={post.completed}
          />
          <input
            type="text"
            name="notes"
            placeholder="write Notes here"
            defaultValue={post.notes}
          />
          <button>Update M.A.G.S</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Delete M.A.G.S</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;