import { useContext } from 'react'
import { DashContext } from '../../providers/DashContext'
import { BackgroundModal, Bar, BarContainer, ContainerModal, TitleAndCloseBtn, TransferContainer } from './style'

const Modal = () => {
  const { modal, setModal, selectedTransaction } = useContext(DashContext)

  const calculateProgress = () => {
    switch (selectedTransaction?.status) {
      case 'Solicitada':
        return '25%';
      case 'Processando':
        return '50%';
      case 'Concluída':
        return '100%';
      default:
        return '0%';
    }
  }

  return (
    <BackgroundModal>
      <ContainerModal>
        <TitleAndCloseBtn>
          <h4>{selectedTransaction?.title}</h4>
          <span onClick={() => setModal(!modal)}>X</span>
        </TitleAndCloseBtn>
        <BarContainer>
          <Bar width={calculateProgress()} />
          <div>
            <span>Solicitada</span>
            <span>Processando</span>
            <span>Concluída</span>
          </div>
        </BarContainer>
        <TransferContainer>
          <h5>Transferindo de</h5>
          <div>
            <span>{selectedTransaction?.from}</span>
            <span>{selectedTransaction?.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </div>
        </TransferContainer>

        <TransferContainer>
          <h5>Para</h5>
          <div>
            <span>{selectedTransaction?.to}</span>
            <span>{selectedTransaction?.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </div>
        </TransferContainer>
      </ContainerModal>
    </BackgroundModal>
  )
}

export default Modal