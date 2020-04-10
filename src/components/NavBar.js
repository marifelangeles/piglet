// import React from "react";
/** @jsx jsx */

import { Link } from "@reach/router";
import { css, jsx } from "@emotion/core";

const NavBar = () => (
  <header
    css={css`
      background-color: #c4deee;
      position: sticky;
      top: 0;
      padding: 1em;
      margin: 0;
      a {
        text-decoration: none;
        color: #123244;
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
