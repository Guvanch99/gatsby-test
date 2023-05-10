import React, { memo } from 'react'
import styled from "styled-components"
import {fontFamily} from "../../../shared/styles/mixins";

const FooterStyled=styled.footer`
  ${fontFamily("Inter")};
  font-size: 18px;
  line-height: 24px;
  padding: 10px 20px;
  background: ${({theme})=>theme.colors.secondary};
  color: ${({theme})=>theme.colors.white};
`
const Footer=()=>(
  <FooterStyled>
    &copy; Copyright by Gatsby test {new Date().getFullYear()}
  </FooterStyled>
)

export default memo(Footer)
