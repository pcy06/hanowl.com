import styled from "@emotion/styled";

export const MainPageContainer = styled.main`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  & > section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`;
