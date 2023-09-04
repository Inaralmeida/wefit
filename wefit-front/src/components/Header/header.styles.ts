import styled from "styled-components";

export const StylesHeader = styled.header`
  width: 100%;
  max-width: 959px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 10px;
  color: #ffffff;

  > .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  > .carrinho {
    display: flex;
    align-items: center;
    gap: 8px;

    > section {
      text-align: right;

      > p {
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        @media screen and (max-width: 475px) {
          display: none;
        }
      }

      > small {
        color: #999;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }
  }
`;
