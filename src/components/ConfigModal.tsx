
import Modal from 'react-modal';

import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
import closeCircle from '../assets/close-circle.svg';



type ConfigModalProps = {
    isModalOpen: boolean;
    toggleModal: () => void;
}


Modal.setAppElement('#root');



export function ConfigModal(props: ConfigModalProps) {


    return (
        <Modal
            isOpen={props.isModalOpen}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 251, 146, 0.75)'
                },
                content: {
                    position: 'absolute',
                    top: '0px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    maxWidth: '760px',
                    height: '100%',
                    border: '1px solid #ccc',
                    background: '#CFC800',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                }
            }}
        >
            <button onClick={props.toggleModal}><img src={closeCircle} alt="fechar modal" /> </button>
            <h3>Configurações</h3>
            <table>
                <tr>
                    <td>Quantidade de dados:</td>
                    <td>
                        <img src={arrowLeft} alt="botão diminuir" />
                        <span>4</span>
                        <img src={arrowRight} alt="botão aumentar" />
                    </td>
                </tr>
                <tr>
                    <td>Quantidade de giros:</td>
                    <td>
                        <img src={arrowLeft} alt="botão diminuir" />
                        <span>4</span>
                        <img src={arrowRight} alt="botão aumentar" />
                    </td>
                </tr>
            </table>
        </Modal>
    )
}