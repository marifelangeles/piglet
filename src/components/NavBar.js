// import React from "react";
/** @jsx jsx */

import { Link } from "@reach/router";
import { css, jsx } from "@emotion/core";
import colors from "./colors";

const NavBar = () => (
  <header
    css={css`
      background-color: ${colors.bisque};
      position: sticky;
      top: 0;
      padding: 1em;
      margin: 0;
      a {
        text-decoration: none;
        color: ${colors.dark};
        font-weight: 900;
      }
      span {
        padding-right: 5px;
      }
    `}
  >
    <Link to="/">
      <span role="img" aria-label="logo">
        🐷
      </span>
      Piglet
    </Link>
  </header>
);

export default NavBar;
