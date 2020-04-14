import React, { FC } from "react";

import { Header } from "semantic-ui-react";
import TopMenu from "./components/Menu/TopMenu";

const App: FC = () => {
  return (
    <React.Fragment>
      <TopMenu />
      <Header
        as="h1"
        content="This is an experiment with semantic-ui-react library"
        textAlign="center"
      />
    </React.Fragment>
  );
};

export default App;
