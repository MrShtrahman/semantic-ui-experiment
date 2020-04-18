import React, { FC } from "react";

import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const ExmaplesLink: FC = () => (
  <Menu.Item content="Examples" as={Link} to="/examples" />
);

export default ExmaplesLink;
