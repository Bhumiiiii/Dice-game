import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components"; 

const GamePlay = () => {
  return (
    <MainContainer>
        <div className="top-section">
        <TotalScore />
        <NumberSelector />
        </div>
        <RoleDice />
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