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

  position: relative;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: absolute;
    top: 11px;
    right: 6px;
    
    width: 12px;
    height: 12px;
    
    background: var(--primary-color);
    
    border-radius: 50%;
    
    color: var(--white);
    font-size: .7rem;

    cursor: pointer;

    transition: .2s ease;

    &:hover {
      background-color: var(--yellow);
      color: var(--black);
    }
  }
`