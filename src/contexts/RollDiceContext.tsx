import { createContext, ReactNode, useState } from 'react';

type RollDiceContextProviderProps = {
    children: ReactNode;
}
type RollDiceContextType = {
    rep: number;
    configRep: (newRep: number) => void;
}
export const RollDiceContext = createContext({} as RollDiceContextType);

export function RollDiceContextProvider(props: RollDiceContextProviderProps) {
    const [rep, setRep] = useState<number>(5);

    function configRep(newRep: number) {
        setRep(newRep);
    }
    return (
        <RollDiceContext.Provider value={{ rep, configRep }}>
            {props.children}
        </RollDiceContext.Provider>
    )
}