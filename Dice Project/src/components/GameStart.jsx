import styled from "styled-components";
import { Button } from "../styled/Button";

const GameStart = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="./images/dices.png" alt="" />
      </div>

      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default GameStart;
const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
    margin: 0;
  }
`;
