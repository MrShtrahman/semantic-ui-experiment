import { Image, Menu } from "semantic-ui-react";
import React, { FC } from "react";

import logo from "../../../assets/logo.png";

const SemanticUiReactLink: FC = () => (
  <Menu.Item
    as="a"
    header
    target="_blank"
    href="https://react.semantic-ui.com/"
  >
    <Image size="mini" src={logo} style={{ marginRight: "1.5em" }} />
    Semantic-UI-React
  </Menu.Item>
);

export default SemanticUiReactLink;
