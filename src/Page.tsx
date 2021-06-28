
import cog from './assets/cog.svg';


import { Dice } from './components/Dice'

import './styles/App.scss';
import './styles/modalStyles.scss'
import { useScore } from './hooks/useScore';
import { ConfigModal } from './components/ConfigModal'
import { useState } from 'react';




export function Page() {
    const { sum } = useScore();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

    function toggleModal() {
        setIsModalOpen(isModalOpen ? false : true);
    }

    return (
        <div id='App' className="App">
            <header>
                <h2>Dice Roller</h2>
                <span onClick={() => setIsModalOpen(true)}><img src={cog} alt="Config" /></span>
                <ConfigModal toggleModal={toggleModal} isModalOpen={isModalOpen} />
            </header>
            <main>
                <button >Roll!</button>
                <div className="dices">
                    <Dice name="dice1" />
                    <Dice name="dice2" />
                    <Dice name="dice3" />
                    <Dice name="dice4" />
                </div>
                <div className="total">
                    <span >{sum}</span>
                </div>
            </main>

        </div>
    )
}