import { styled } from "styled-components";

export const StylesListCart = styled.ul`
  border-radius: 4px;
  background: #fff;
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 21px;

  @media screen and (max-width: 622px) {
    > .header {
      display: none;
    }
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 90vh;

    > .footer {
      position: relative;
      bottom: 0;
      align-content: flex-end;
      width: 100%;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      display: flex;
      padding-top: 21px;
      border-top: 1px solid #999;
      gap: 16px;

      > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 12px;
        order: 0;
      }
      > button {
        order: 1;
        width: 100%;
      }
    }
  }

  > .footer {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding-top: 21px;
    border-top: 1px solid #999;

    > div {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
`;
