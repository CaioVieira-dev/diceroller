
import { useState } from 'react';
import Modal from 'react-modal';

import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
import closeCircle from '../assets/close-circle.svg';
import cog from '../assets/cog.svg';



type ConfigModalProps = {
    diceAmount: number;
    diceSpin: number;
    handleDiceSpin: (increase: boolean) => void;
    handleDiceAmount: (increase: boolean) => void;
}


Modal.setAppElement('#root');



export function ConfigModal(props: ConfigModalProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

    return (
        <>
            <span onClick={() => setIsModalOpen(true)}><img src={cog} alt="Config" /></span>
            <Modal
                isOpen={isModalOpen}
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
                        width: '100%',
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
                <div className="modal">
                    <button className="close" onClick={() => setIsModalOpen(false)}><img src={closeCircle} alt="fechar modal" /> </button>
                    <h3>Configurações</h3>
                    <table>
                        <tr>
                            <td><p>Quantidade de dados:</p></td>
                            <td>
                                <button onClick={() => props.handleDiceAmount(false)}><img src={arrowLeft} alt="botão diminuir" /></button>
                                <span>{props.diceAmount}</span>
                                <button onClick={() => props.handleDiceAmount(true)}><img src={arrowRight} alt="botão aumentar" /></button>
                            </td>
                        </tr>
                        <tr>
                            <td><p>Quantidade de giros:</p></td>
                            <td>
                                <button onClick={() => props.handleDiceSpin(false)}><img src={arrowLeft} alt="botão diminuir" /></button>
                                <span>{props.diceSpin}</span>
                                <button onClick={() => props.handleDiceSpin(true)}><img src={arrowRight} alt="botão aumentar" /></button>
                            </td>
                        </tr>
                    </table>
                </div>
            </Modal>
        </>
    )
}