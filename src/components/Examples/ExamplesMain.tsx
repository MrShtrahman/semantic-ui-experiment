import { Button, Container, Header, Icon, Item } from "semantic-ui-react";
import React, { FC } from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useRouteMatch } from "react-router";

/*const createRouteFromComponentName = (name: string) =>
  name.replace(" ", "-").toLowerCase();*/

const ExamplesMain: FC = () => {
  const { path, url } = useRouteMatch();
  return (
    <Container text>
      <Header as="h1" content="Examples" textAlign="center" />
      <Header
        as="h3"
        textAlign="center"
        content="Exmaples that I find relevant, which cover various UI design issues"
      />
      <br />
      <br />
      <Item.Group divided>
        <Item>
          <Item.Image src={logo} size="mini" />
          <Item.Content>
            <Item.Header content="Responsive grid" />
            <Item.Extra>
              <Link to={`${url}/responsive-grid`}>
                <Button primary floated="right">
                  Go to example
                  <Icon name="chevron circle right" />
                </Button>
              </Link>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
};

export default ExamplesMain;
/* {examples.map((example) => (
          <Dropdown.Item
            key={example}
            content={example}
            as={Link}
            to={`/examples/${createRouteFromComponentName(example)}`}
          />
        ))} */
