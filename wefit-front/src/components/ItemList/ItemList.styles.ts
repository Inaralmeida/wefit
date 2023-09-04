import styled from "styled-components";

interface ISetitemList {
  isHeader?: boolean
}

export const StylesItemList = styled.li<ISetitemList>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 52px;

  > img {
    width: 89px;
    height: 114px;
  } 

  > section {
    width: 100%;

    display: grid;
    grid-template-columns: ${p=> p.isHeader ? '3fr' : '2fr'} 1fr 2fr 18px;
    grid-template-rows: 1fr;
    grid-template-areas: "description amount subtotal trash";

    .description {
      grid-area: description;
    }

    .amount {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      grid-area: amount;
    }

    .subtotal {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-area: subtotal;
      flex-direction: column;

      > small {
        display: none;
      }
    }

    .trash {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-area: trash;
    }
  }

  @media screen and (max-width: 622px) {
    width: fit-content;
    gap: 16px;
    justify-content: flex-start;

    > section {
      width: fit-content;
      grid-column-gap: 16px;
      grid-template-columns: 2fr 1fr 18px;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "description description description trash"
        "amount amount subtotal subtotal";

      > .description {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-area: description;
        gap: 16px;
      }

      > .subtotal{
        display: flex;
        > small{
        display: block;
      }
      }
    }
  }
`;