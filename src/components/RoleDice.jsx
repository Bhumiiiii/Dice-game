import { useState } from "react";
import styled from "styled-components";

const RoleDice = () => {
const [ currentDice , setCurrentDice ] = useState();

    const generateRandomNumber = (min, max) => {
        console.log(Math.floor(Math.random = (max - min) + min))
    return Math.floor(Math.random() = (max - min) + min);
    };

  return (
    <DiceContainer>
        <div className="dice" onClick={() => generateRandomNumber(1,7)}>
            <img src="/images/Dice/dice_1.png" alt="Dice 1" />
        </div>
        <p>Click on Dice to roll </p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
justify-content: center;
align-items: center;

p{
    font-size: 24px;
}

.dice{
    cursor: pointer;
}
`;