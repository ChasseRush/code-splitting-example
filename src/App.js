"use-es6";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import AppContainer from "./Containers/AppContainer.js";
import SettingsContainer from "./Containers/SettingsContainer";
import Spinner from "./Components/Spinner";
import "./App.css";

const AsyncFeedbackContainer = React.lazy(() =>
  import("./Containers/FeedbackContainer")
);

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Route path="/app" exact component={AppContainer} />
        <Route path="/settings" exact component={SettingsContainer} />
        <React.Suspense fallback={Spinner}>
          <Route path="/feedback" exact component={AsyncFeedbackContainer} />
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
