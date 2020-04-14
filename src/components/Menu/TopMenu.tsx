import { Container, Dropdown, Icon, Menu } from "semantic-ui-react";
import React, { FC } from "react";

const TopMenu: FC = () => (
  <React.Fragment>
    <Menu fixed="top" inverted color="teal" size="huge">
      <Container>
        <Menu.Item as="a" content="Home" header />
        <Dropdown item simple text="Examples">
          <Dropdown.Menu>
            <Dropdown.Item content="Responsive grid" />
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item position="right">
          <Icon link name="github" size="large" />
        </Menu.Item>
      </Container>
    </Menu>
    <br />
    <br />
    <br />
  </React.Fragment>
);

export default TopMenu;
