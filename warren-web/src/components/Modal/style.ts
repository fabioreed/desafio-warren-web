import { styled } from "styled-components"

export const BackgroundModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  right: 0;

  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
`

export const ContainerModal = styled.div`
  background: var(--white);

  padding: 1.4rem;
  width: 85%;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    width: 450px;
  }
`

export const TitleAndCloseBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h4 {
    color: var(--black);
    font-size: 1rem;
  }

  > span {
    color: var(--grey);

    cursor: pointer;
  }
`

export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .7rem;

  :nth-child(2) {
    display: flex;
    justify-content: space-between;
    gap: .4rem;

    font-size: .55rem;
    color: var(--grey);
  }
`

export const Bar = styled.div`
  width: ${props => props.width || '100%'};
  height: 10px;

  border-radius: 10px;

  background: var(--primary-color);
`

export const TransferContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .7rem;

  > h5 {
    color: var(--grey);
    font-size: .75rem;

    border-bottom: 1px solid var(--grey);
  }

  > div {
    display: flex;
    justify-content: space-between;

    > span {
      font-size: .7rem;
      color: var(--gray);
    }
  }
`