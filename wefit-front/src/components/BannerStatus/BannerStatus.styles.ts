import { styled } from "styled-components";

interface IStylesBannerStatus{
  bg: string
}

export const StylesBannerStatus = styled.div<IStylesBannerStatus>`
  display: flex;
  max-width: 960px;
  width: 100%;
  padding: 64px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  border-radius: 4px;
  background: #fff;
  > img{
    object-position: center;
    object-fit: scale-down;
    
    min-width: 169px;
    min-height: 264px;
  }

`;
