import { Link } from "react-router-dom";
import usePageTitle from "../usePageTitle.js";

export default function Home() {
  usePageTitle("Home");

  return (
    <main>
      <h2>Home</h2>
      <p>Welcome to my ITIS3135 course site! This site holds my work for Front-End Web Development, including my introduction and my course contract.</p>
      <p>Want to know more about me? Read my <Link to="/introduction">introduction</Link>.</p>
    </main>
  );
}
