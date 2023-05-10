import React, {memo, FC} from "react"
import { Link, HeadFC } from "gatsby"
import styled from 'styled-components'
import {flex, fontFamily} from "../shared/styles/mixins";
import MainLayout from "../layout/mainLayout/components/MainLayout";
import SEO from "../shared/components/SEO";

const WrapperStyled=styled.main`
  ${flex({justify:'center', align:'center'})};
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const ContentStyled=styled.div`
  ${flex({justify:'center', align:'center'})};
  border-radius: 8px;
  border: 1px solid ${({theme})=>theme.colors.secondary};
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 500px;
`

const HeaderStyled=styled.h1`
  ${fontFamily('Inter')};
  font-size: 24px;
  line-height: 32px;
  color: ${({theme})=>theme.colors.secondary};
  margin-bottom: 16px;
`
const NotFoundPage: FC = () => {
  return (
    <>
    <SEO title='Not found page' description='not founded page'/>
      <MainLayout>
        <WrapperStyled>
          <ContentStyled>
            <HeaderStyled>Not found</HeaderStyled>
            <Link to='/'>Go Home</Link>
          </ContentStyled>
        </WrapperStyled>
      </MainLayout>
    </>
  )
}

export default NotFoundPage
