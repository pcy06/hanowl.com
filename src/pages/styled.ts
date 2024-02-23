import styled from "@emotion/styled";

export const MainPageContainer = styled.main<{ isEnd: boolean }>`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y ${({ isEnd }) => (isEnd ? "none" : "mandatory")};
  & > section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`;
