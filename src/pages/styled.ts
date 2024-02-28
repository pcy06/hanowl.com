import { colors } from "src/styles";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const MainPageContainer = styled.main<{ isApp: boolean }>`
  overflow-y: scroll;
  height: 100vh;
  scroll-snap-type: y mandatory;
  & > section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
  /* ${({ isApp }) =>
    isApp &&
    css`
      overflow-y: scroll;
      height: 100vh;
      scroll-snap-type: y mandatory;
      & > section {
        scroll-snap-align: start;
        scroll-snap-stop: always;
      }
    `} */
`;
