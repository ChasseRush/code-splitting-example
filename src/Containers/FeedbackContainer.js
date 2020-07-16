"use-es6";

import React from "react";
import Header from "../Components/Header";

export default function FeedbackContainer() {
  return (
    <div className="main-section">
      <Header />
      <h2>
        I'm the dreaded feedback container and my bundle size is HUUUGGGEE
      </h2>
      <h2>I'm the reason why the initial page load is taking so long</h2>
      <h3>Muahahahah</h3>
    </div>
  );
}
