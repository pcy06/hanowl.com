import { StaticImageData } from "next/image";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const EventSectionContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const EventSectionContentContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 2rem;
  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
    grid-gap: 2rem;
  }
`;
