import { useContext } from 'react';
import { ScoreContext } from '../contexts/ScoreContext'

export function useScore() {
    const value = useContext(ScoreContext);
    return value;
}