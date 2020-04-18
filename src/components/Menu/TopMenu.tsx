import { Container, Menu } from "semantic-ui-react";
import React, { FC } from "react";

import ExamplesLink from "./Links/ExmaplesLink";
import GithubLink from "./Links/GithubLink";
import HomeLink from "./Links/HomeLink";
import SemanticLink from "./Links/SemanticUIReactLink";

const TopMenu: FC = () => (
  <React.Fragment>
    <Menu fixed="top" inverted color="teal" size="huge">
      <Container>
        <SemanticLink />
        <HomeLink />
        <ExamplesLink />

        {/* right-aligned links */}
        <GithubLink />
      </Container>
    </Menu>
    <br />
    <br />
    <br />
    <br />
  </React.Fragment>
);

export default TopMenu;
