import { styled } from "styled-components";

export const StylesStepperInput = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 11px;

  > input{
    width: 62px;
    height: 26px;
    padding: 3.5px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 4px;
    border: 1px solid #D9D9D9;
    background: #FFF;
  }

  @media screen and (max-width: 540px) {
    order: 3;
  }
`