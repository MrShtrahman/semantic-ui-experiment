import React, { FC } from "react";

import ExamplesMain from "./components/Examples/ExamplesMain";
import HomeLayout from "./components/HomeLayout";
import { Route } from "react-router-dom";
import TopMenu from "./components/Menu/TopMenu";

const App: FC = () => {
  return (
    <React.Fragment>
      <Route path="/" component={TopMenu} />
      <Route path="/" exact component={HomeLayout} />
      <Route path="/examples" component={ExamplesMain} />
    </React.Fragment>
  );
};

export default App;
