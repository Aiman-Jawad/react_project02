import React, { useState } from "react";
import styled from "styled-components";

const DiceRoll = ({ CurrentDice, RoleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={RoleDice}>
        <img src={`./images/dice/dice_${CurrentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default DiceRoll;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  p {
    font-size: 24px;
  }
`;
