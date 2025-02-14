import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeployApi from "./pages/deployapi";
export default function Home() {
  return (
    <button>
      <DeployApi />
    </button>
  );
}
