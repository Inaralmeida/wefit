import { styled } from "styled-components";

export const StylesCardProducts = styled.div`
  border-radius: 4px;
  background: #fff;
  display: flex;
  padding: 10px 11px;
  align-items: flex-start;
  flex-direction: column;
  align-items: center;
  width: 309px;
  height: 305px;
  color: #2f2e41;
  font-weight: 700;

  > img {
    width: 147px;
    height: 188px;
    margin-bottom: 7px;
  }

  > p {
    font-size: 16px;
    margin-top: 2px;
    margin-bottom: 8px;
  }

  > small {
    font-size: 12px;
    line-height: 16px;
  }
`;
