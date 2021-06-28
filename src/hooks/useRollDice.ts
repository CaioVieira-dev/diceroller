import { useContext } from 'react';
import { RollDiceContext } from '../contexts/RollDiceContext'

export function useRollDice() {
    const value = useContext(RollDiceContext);
    return value;
}