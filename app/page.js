import { Link } from "react-router-dom";
import DeployApi from "./deployapi.js";
export default function Home() {
  return (
    <div>
      <h1>Exercise 1.6</h1>
      <button src="/deployapi">
        <DeployApi />
      </button>
    </div>
  );
}
