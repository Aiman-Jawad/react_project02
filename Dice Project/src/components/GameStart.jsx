import styled from "styled-components";

const GameStart = () => {
  return (
    <Container>
      <div>
        <img src="./images/dices.png" alt="" />
      </div>

      <div className="content">
        <h1>Dice Game</h1>
        <Button>Play Now</Button>
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

const Button = styled.div`
  max-width: 220px;
  max-height: 44px;
  background-color: black;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
