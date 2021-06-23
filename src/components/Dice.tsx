import { useEffect, useState } from 'react';
import face1 from '../assets/face 1.svg';
import face2 from '../assets/face 2.svg';
import face3 from '../assets/face 3.svg';
import face4 from '../assets/face 4.svg';
import face5 from '../assets/face 5.svg';
import face6 from '../assets/face 6.svg';

export function Dice() {
    const [face, setFace] = useState(face1);
    const [rep, setRep] = useState(5);


    useEffect(() => {
        const num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

        const timer = setTimeout(() => {
            if (rep === 0) {
                return;
            }
            setRep(rep - 1)
            switch (num) {
                case 1: setFace(face1);
                    break;
                case 2: setFace(face2);
                    break;
                case 3: setFace(face3);
                    break;
                case 4: setFace(face4);
                    break;
                case 5: setFace(face5);
                    break;
                case 6: setFace(face6);
                    break;
            }
        }, 600);

        return () => {
            clearTimeout(timer);
        }
    }, [rep])

    return (
        <img src={face} alt="dice" />
    )
}