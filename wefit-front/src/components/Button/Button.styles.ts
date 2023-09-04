import { styled } from "styled-components";

interface IStyleButton {
  width: string;
  center: boolean
}

export const StylesButton = styled.button<IStyleButton>`


  width: ${(p) => p.width};
  border-radius: 4px;
  background: #009edd;
  display: flex;
  padding: 8px;
  justify-content: center;
  margin: ${p => p.center ? '0 auto' : 0};
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border: none;
  cursor: pointer;

  &.active {
    background: #039b00;
  }

  > .content-icon {
    display: flex;
    align-items: center;
    gap: 3.4px;
    color: #fff;

    > img {
      width: 13.6px;
      height: 13.6px;
    }

    > small {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
    }
  }

  > p {
    color: #fff;
    text-align: center;
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
`;
