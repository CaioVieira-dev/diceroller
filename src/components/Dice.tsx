import { useEffect, useState } from 'react';
import face1 from '../assets/face 1.svg';
import face2 from '../assets/face 2.svg';
import face3 from '../assets/face 3.svg';
import face4 from '../assets/face 4.svg';
import face5 from '../assets/face 5.svg';
import face6 from '../assets/face 6.svg';
import { useScore } from '../hooks/useScore';
import { useRollDice } from '../hooks/useRollDice'
type DiceProps = {
    name: string
}

export function Dice(props: DiceProps) {
    const [face, setFace] = useState(face1);
    const { rep: configuredRep } = useRollDice();
    const [rep, setRep] = useState(configuredRep || 5);
    const [faceVal, setFaceVal] = useState(1);

    const { handleDiceChange } = useScore();

    useEffect(() => {
        const num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

        const timer = setTimeout(() => {
            if (rep === 0) {
                return;
            }
            setRep(rep - 1)
            switch (num) {
                case 1:
                    setFace(face1);
                    setFaceVal(1);
                    break;
                case 2:
                    setFace(face2);
                    setFaceVal(2);
                    break;
                case 3:
                    setFace(face3);
                    setFaceVal(3);
                    break;
                case 4:
                    setFace(face4);
                    setFaceVal(4);
                    break;
                case 5:
                    setFace(face5);
                    setFaceVal(5);
                    break;
                case 6:
                    setFace(face6);
                    setFaceVal(6);
                    break;
            }
        }, 500);

        return () => {
            clearTimeout(timer);
        }
    }, [rep])

    useEffect(() => {
        handleDiceChange(props.name, faceVal);
    }, [faceVal])

    return (
        <img src={face} alt="dice" />
    )
}