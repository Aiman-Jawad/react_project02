import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import DiceRoll from "./DiceRoll";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../styled/Button";
import { ResetScore_Button } from "../styled/Button";
import { ShowRules_Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const GenrateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const RoleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number!");
      return;
    }

    const randomNumber = GenrateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const ResetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <DiceRoll CurrentDice={CurrentDice} RoleDice={RoleDice} />
      <div className="btns">
        <ResetScore_Button onClick={ResetScore}>Reset Score</ResetScore_Button>

        <ShowRules_Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </ShowRules_Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    gap: 20px;
  }
`;
