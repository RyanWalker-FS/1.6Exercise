import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DeployApi from "./deployapi";
export default function Home() {
  return (
    <div>
      <DeployApi />
    </div>
  );
}
