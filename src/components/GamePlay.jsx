import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components"; 
import { useState } from "react";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber,setSelectedNumber] = useState();
  const [currentDice , setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
return Math.floor(Math.random() * (max - min) + min);
};

const roleDice = () => {
  if(!selectedNumber) {
    setError("You have not selected any number");
    return;
  };
  setError("");

    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);


    if(selectedNumber == randomNumber){
      setScore((prev) => prev + randomNumber);
  }else {
      setScore((prev) => prev - 2)
  }
  setSelectedNumber(undefined);
    };

  return (
    <MainContainer>
        <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector  
        error={error}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        />
        </div>
        <RoleDice currentDice={currentDice}
        roleDice={roleDice} />
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
padding-top: 70px;
.top-section{
    display: flex;
    justify-content: space-between;
    align-items: end;
}
`;