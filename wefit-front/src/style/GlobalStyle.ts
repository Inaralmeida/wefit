import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

}

body, html, #root{
  width: 100%;
  min-height: 100vh;
  background-color: #2F2E41;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-width: 375px;
  height: fit-content;

}

button,
a {
  cursor: pointer;
}

a, li{
  text-decoration: none;
  list-style: none;
  color: inherit;
}

.container{
  max-width: 959px;
  min-height: calc(100vh - 100px);
}

.home{ 
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  gap:16px;
  padding-bottom: 76px;
  padding-top: 24px;

  > .load{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 959px){
    justify-content: center;
  }
}

.small-destaque{
  color: #999;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.text-default{
  color: #2F2E41;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

:root .MuiCircularProgress-colorPrimary{
  color:  #E6E6E6;
}
:root .MuiIcon-colorPrimary{
  color: #009EDD;
}
`;
