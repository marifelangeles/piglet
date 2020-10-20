import React from "react";
import { navigate } from "@reach/router";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import _ from "lodash";

import RelativeTime from "components/utils/RelativeTime";
import Status from "components/utils/Status";
import Total from "components/utils/Total";

const Tracker = ({ type, bgColor }) => {
  const activity = type;
  return (
    <div
      className={type}
      onClick={() => {
        navigate(`./${type}`);
      }}
      css={css`
        border: 1px solid ${bgColor};
        border-radius: 5px;
        background-color: ${bgColor};
        padding: 1em;
        margin: 1em 0;
        color: black;
        h1 {
          font-size: 1em;
          margin: 0;
        }
        p {
          margin: 0;
        }
      `}
    >
      <div>
        <RelativeTime activity={activity} />
        <Status activity={activity} />
        <Total activity={activity} />
      </div>
    </div>
  );
};

export default Tracker;
