import React, {FC} from "react";
import styled from "styled-components"
import {flex, fontFamily} from "../shared/styles/mixins";
import {Link, PageProps} from "gatsby";
import { GatsbyImage, getImage, type ImageDataLike, type IGatsbyImageData } from "gatsby-plugin-image"
import MainLayout from "../layout/mainLayout/components/MainLayout";
import SEO from "../shared/components/SEO";

const WrapperStyled=styled.div`
  ${flex({justify:'center', align:'center'})};
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
`

const GatsbyImageStyled=styled(GatsbyImage)`
  object-fit: contain;
`

const ContentStyled=styled.section`
  ${flex({})};
  ${fontFamily('Inter')};
  flex-direction: column;
  gap: 10px;
  color: ${({theme})=>theme.colors.secondary};
  padding: 10px;
  width: 100%;
  max-width: 400px;
`


const TitleStyled=styled.h2`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
`

const PriceStyled=styled.p`
  font-size: 16px;
  line-height: 18px;
`

const DescriptionStyled=styled.article`
  font-size: 14px;
  line-height: 16px;
`
const ArticulStyled=styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
`

const NavigationStyled=styled(Link)`
  background: ${({theme})=>theme.colors.blue500};
  color: ${({theme})=>theme.colors.white};
  padding: 10px 12px;
  text-align: center;
`

type TProps={
  image: string
  id: string
  name: string
  price: string
  description:string
}
const ProductDetail:FC<PageProps<null, TProps>
>=({pageContext:{
  image:url,
  price,
  name,
  id,
  description
}})=>{

return (
  <>
  <SEO title={name} description={description}/>
  <MainLayout>
    <WrapperStyled>
      <GatsbyImageStyled
        image={getImage(url as unknown as ImageDataLike) as IGatsbyImageData}
        alt={name}
      />
      <ContentStyled>
        <TitleStyled>Name: {name}</TitleStyled>
        <PriceStyled>Price: {price}</PriceStyled>
        <DescriptionStyled>Description: {description}</DescriptionStyled>
        <ArticulStyled>Articul: {id}</ArticulStyled>
        <NavigationStyled to='/'>Go Back</NavigationStyled>
      </ContentStyled>
    </WrapperStyled>
  </MainLayout>
  </>
)
}

export default ProductDetail
