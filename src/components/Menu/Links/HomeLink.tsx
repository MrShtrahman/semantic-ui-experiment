import React, { FC } from "react";

import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const HomeLink: FC = () => <Menu.Item as={Link} content="Home" to="/" />;

export default HomeLink;
