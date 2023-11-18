import React from "react";
import { Link } from "react-router-dom";

export default function V_Dashboard() {
  return (
    <div>
      <p>This a bashb</p>
      <Link to="/home/profile">go to profile</Link>
    </div>
  );
}
