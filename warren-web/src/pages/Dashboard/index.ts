import { styled } from "styled-components";

export const FiltersContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Container = styled.main`
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.7rem;

  @media (min-width: 768px) {
    padding: 3rem 11rem;

    gap: 3rem;
  }
`