import { styled } from "styled-components";

export const TableMainContainer = styled.main`
  display: flex;

  overflow-x: auto;
`

export const Column = styled.section`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  border: .7px solid var(--grey);
  border-radius: 6px;

  padding: .6rem;
  width: 160px;

  flex-shrink: 0;

  > h4 {
    color: var(--grey);
    font-size: .9rem;

    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  > span {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    font-size: .7rem;
  }
`