import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props) => {
  const mags = useLoaderData()

  return <>
  <div style={{textAlign: "center"}}>
  <h2>Create a M.A.G.S</h2>
  <Form action="/create" method="post">
      <input type="text" name="title" placeholder="write Tilte here"/>
      <input type="text" name="rating" placeholder="write rating here"/>
      <button>Create New M.A.G.S</button>
  </Form>
  </div>
  {mags.map((post) => <Post post={post} key={post.id} />)}
  </>;
};

export default Index;