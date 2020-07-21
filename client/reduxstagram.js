import React from "react";

import { render } from "react-dom";

// Import css
import css from "./styles/style.styl";

// Import Components
import App from "./component/App";
import Single from "./component/Single";
import PhotoGrid from "./component/PhotoGrid";
import AboutProgrammer from "./component/About";
import Contact from "./component/contact";

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/about" component={AboutProgrammer} />
        <Route path="/contact" component={Contact} />
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
