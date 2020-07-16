"use-es6";

import React, { useState } from "react";
import Loadable from "react-loadable";
import Spinner from "../Components/Spinner";
import Header from "../Components/Header";

const AsyncSuperHugeComponent = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: 'SuperHugeComponent' */ "../Components/SuperHugeComponent"
    ),
  loading: Spinner,
});

export default function SettingsContainer() {
  const [shouldShowHugeComponent, updateShouldShow] = useState(false);
  return (
    <div className="main-section">
      <Header />
      <h2>I'm the settings part of this pretty cool app</h2>
      <h2>My bundle size is pretty big though, like what /app said</h2>
      <h2>
        I also have this really weird HugeComponent that's slowing me down
      </h2>
      <button
        className="button"
        onClick={() => updateShouldShow(!shouldShowHugeComponent)}
      >
        Click me to set your favorites
      </button>
      {shouldShowHugeComponent && <AsyncSuperHugeComponent />}
    </div>
  );
}
