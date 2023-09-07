import { styled } from "styled-components";

export const FiltersContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  /* padding: 1rem 2rem; */

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Container = styled.main`
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.7rem;
`