"use-es6";

import React from "react";
import Header from "../Components/Header";

export default function AppContainer() {
  return (
    <div className="main-section">
      <Header />
      <h2>I'm a pretty cool app</h2>
      <h2>My bundle size is pretty big though</h2>
    </div>
  );
}
