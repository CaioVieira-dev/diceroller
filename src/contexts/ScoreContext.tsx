import { createContext, ReactNode, useEffect, useState } from 'react';

type ScoreContextProviderProps = {
    children: ReactNode;
}
type Dice = {
    id: string;
    value: number;
}

type Dices = Dice[];

type ScoreContextType = {
    dices: Dice[],
    handleDiceChange: (id: string, value: number) => void;
    sum: number;
}

export const ScoreContext = createContext({} as ScoreContextType);


export function ScoreContextProvider(props: ScoreContextProviderProps) {
    const [dices, setDices] = useState<Dices>([]);
    const [sum, setSum] = useState(0);

    function handleDiceChange(id: string, faceValue: number) {
        if (dices.findIndex(dice => dice.id === id) !== -1) {
            setDices(dices.map(dice => {
                if (dice.id === id) {
                    return {
                        id: id,
                        value: faceValue
                    }
                }
                return dice
            }))
        } else {
            setDices([...dices, {
                id: id,
                value: faceValue
            }])
        }

    }
    useEffect(() => {
        let result = 0;
        dices.forEach(dice => result += dice.value)
        setSum(result);
    }, [dices])

    return (
        <ScoreContext.Provider value={{ dices, handleDiceChange, sum }}>
            {props.children}
        </ScoreContext.Provider>
    )

}