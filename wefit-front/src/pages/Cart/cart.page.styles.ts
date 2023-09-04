import { styled } from "styled-components";

export const StylesCartContainer = styled.div`
  width: 100%;
  max-width: 959px;
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 26px;

  @media screen and (max-width: 970px) {
    padding: 16px ;
    padding-top: 0;
  }

`