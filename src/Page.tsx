



import { Dice } from './components/Dice'

import './styles/App.scss';
import './styles/modalStyles.scss'
import { useScore } from './hooks/useScore';
import { ConfigModal } from './components/ConfigModal'
import { useState } from 'react';
import { useRollDice } from './hooks/useRollDice';


export function Page() {
    const { sum } = useScore();

    const { configRep } = useRollDice();

    const [diceAmount, setDiceAmount] = useState<number>(4);
    const [diceSpin, setDiceSpin] = useState<number>(5);

    const [isRolling, setIsRolling] = useState<boolean>(false);


    function handleDiceAmount(increase: boolean) {
        if (diceAmount !== 0) {
            setDiceAmount(increase ? diceAmount + 1 : diceAmount - 1);
        } else if (increase) { setDiceAmount(diceAmount + 1) }
    }
    function handleDiceSpin(increase: boolean) {
        if (diceSpin !== 0) {
            setDiceSpin(increase ? diceSpin + 1 : diceSpin - 1);
            configRep(increase ? diceSpin + 1 : diceSpin - 1);
        } else if (increase) { setDiceSpin(diceSpin + 1) }
    }

    function toggleRoll() {
        setIsRolling(!isRolling);
    }
    function stopRoll() {
        setIsRolling(false);
    }

    return (
        <div id='App' className="App">
            <header>
                <h2>Dice Roller</h2>

                <ConfigModal
                    diceAmount={diceAmount}
                    diceSpin={diceSpin}
                    handleDiceSpin={handleDiceSpin}
                    handleDiceAmount={handleDiceAmount} />
            </header>
            <main>
                <button onClick={toggleRoll}>Roll!</button>
                <div className="dices">
                    {[...Array(diceAmount)].map((dice, index) => {
                        return <Dice
                            key={`dice${index}`}
                            name={`dice${index}`}
                            isRolling={isRolling}
                            stopRoll={stopRoll}
                        />
                    })}
                </div>
                <div className="total">
                    <span >{sum}</span>
                </div>
            </main>

        </div>
    )
}