import styled from "styled-components";

export const Button = styled.div`
  max-width: 220px;
  max-height: 44px;
  background-color: black;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const ResetScore_Button = styled.div`
  background-color: white;
  color: black;

  border: 1px solid black;

  width: 220px;
  max-height: 44px;
  padding: 10px 18px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: grey;
    color: white;
    border: 1px solid black;
  }
`;

export const ShowRules_Button = styled(ResetScore_Button)`
  width: 220px;
  background-color: black;
  color: white;

  border: 1px solid black;
`;
