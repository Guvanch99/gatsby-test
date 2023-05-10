import React, { ReactNode } from 'react'
import styled, {ThemeProvider} from "styled-components"
import Footer from "./Footer";
import {GlobalStyles} from "../../../shared/styles/GlobalStyles";
import {styledTheme} from "../../../shared/styles/styledTheme";
import {flex} from "../../../shared/styles/mixins";

const WrapperStyled=styled.div`
  ${flex({})};
  flex-direction: column;
  height: 100%;
`

const OutletStyled=styled.div`
  ${flex({})};
  height: 100%;
  width: 100%;
  flex:1;
  padding:10px;
  overflow: auto;
`

type TProps={
  children: ReactNode
}
const MainLayout:React.FC<TProps> = ({children})=>(
  <ThemeProvider theme={styledTheme}>
    <GlobalStyles/>
    <WrapperStyled>
      <OutletStyled>
        {children}
      </OutletStyled>
      <Footer/>
    </WrapperStyled>
  </ThemeProvider>
)

export default MainLayout
