"use-es6";

import React from "react";

export default function Header() {
  return (
    <div className="header">
      <button
        className="button"
        onClick={() => (window.location.href = "/app")}
        style={{ marginRight: 16 }}
      >
        App
      </button>
      <button
        className="button"
        onClick={() => (window.location.href = "/settings")}
        style={{ marginRight: 16 }}
      >
        Settings
      </button>
      <button
        className="button"
        onClick={() => (window.location.href = "/feedback")}
      >
        Feedback
      </button>
    </div>
  );
}
