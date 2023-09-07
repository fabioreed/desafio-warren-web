import { styled } from "styled-components";

export const InputContainer = styled.div`
  > input {
    width: 100%;
    padding: .6rem 1rem;

    border-radius: 6px;
    border: 1px solid var(--light-gray);

    color: var(--primary-color);

    &::placeholder {
      color: var(--grey);
    }
  }
`