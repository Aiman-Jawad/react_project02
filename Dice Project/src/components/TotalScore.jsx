import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <>
      <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
      </ScoreContainer>
    </>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 180px;
  text-align: center;
  h1 {
    font-size: 100px;
    margin: 0 auto;
  }

  p {
    font-size: 24px;
    font-weight: 500px;
    margin: 0;
  }
`;
