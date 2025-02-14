import { Link } from "react-router-dom";
import DeployApi from "./deployapi";
export default function Home() {
  return (
    <div>
      <h1>Exercise 1.6</h1>
      <button>
        <Link to="/deployapi">Deploy API</Link>
      </button>
    </div>
  );
}
