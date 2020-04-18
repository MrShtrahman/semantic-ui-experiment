import { Icon, Menu } from "semantic-ui-react";
import React, { FC } from "react";

const GithubLink: FC = () => (
  <Menu.Item
    as="a"
    href="https://github.com/MrShtrahman/semantic-ui-experiment"
    position="right"
    target="_blank"
  >
    <Icon name="github" size="large" fitted />
  </Menu.Item>
);

export default GithubLink;
