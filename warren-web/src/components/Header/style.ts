import { styled } from "styled-components";

export const MainHeaderContainer = styled.header`
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid rgba(0, 0, 0, 0.09);

  background: var(--light-gray);

  > h2 {
    color: var(--black);
  }
`